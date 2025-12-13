import { SshService } from '../src/utils/ssh/ssh.service';
import * as path from 'path';
import * as os from 'os';

async function run() {
  const password = process.env.SSH_PASSWORD;

  if (!password) {
    console.error('Error: SSH_PASSWORD environment variable is not set.');
    console.error(
      'Please run with: SSH_PASSWORD=your_mac_password npx ts-node scripts/test-ssh-backup.ts',
    );
    process.exit(1);
  }

  // Configuration for 'loopback' SSH (connecting to local machine)
  const sshConfig = {
    host: '127.0.0.1',
    port: 22,
    username: os.userInfo().username, // Use current OS user
    password: password,
  };

  console.log(`Connecting to ${sshConfig.username}@${sshConfig.host}...`);

  const sshService = new SshService(sshConfig);

  try {
    await sshService.connect();
    console.log('SSH Connection successful!');

    // 1. Create backup inside the mongo container
    console.log('Step 1: Running mongodump inside container...');
    const dumpCmd =
      'docker exec nestjs-demo-mongo-1 mongodump --out /data/dump';
    const dumpResult = await sshService.exec(dumpCmd);
    if (dumpResult.code !== 0) {
      throw new Error(`Mongodump failed: ${dumpResult.output}`);
    }
    console.log('Mongodump output:', dumpResult.output);

    // 2. Copy backup from container to host (which is also this machine in this test)
    console.log(
      'Step 2: Copying files from container to host /tmp/nestjs-backup...',
    );

    // Ensure target dir exists (although docker cp might create it, it's safer to ensure parent)
    // Actually docker cp copies the directory itself.
    // We'll cp to /tmp/nestjs-backup. If /tmp/nestjs-backup exists, it puts it inside.
    // Let's rm -rf it first to be clean or just overwrite.

    const cpCmd = 'docker cp nestjs-demo-mongo-1:/data/dump /tmp/nestjs-backup';
    const cpResult = await sshService.exec(cpCmd);
    if (cpResult.code !== 0) {
      throw new Error(`Docker cp failed: ${cpResult.output}`);
    }
    console.log('Docker cp output:', cpResult.output);

    console.log('Backup test completed successfully!');
    console.log('Check /tmp/nestjs-backup on your machine.');
  } catch (error) {
    console.error('An error occurred during the SSH test:');
    console.error(error);
  } finally {
    // In a real app we might want to close connection, but SshService doesn't expose close() easily
    // based on the file content I saw (it has connect() but I didn't verify disconnect/end).
    // The process will limit out anyway.
    process.exit(0);
  }
}

run();
