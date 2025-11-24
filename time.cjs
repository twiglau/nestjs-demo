const { spawn } = require('child_process');

// 执行命令
const process = spawn('npm', ['run', 'test']);
const dateBegin = new Date();

process.stdout.on('data', (data) => {
  console.log(data.toString());

  if (data.toString().includes('Ran all test suites.')) {
    const dateEnd = new Date();
    console.log('Duration:', dateEnd - dateBegin, 'ms');

    process.kill();
  }
});

// 添加错误处理
process.stderr.on('error', (error) => {
  console.error(`Error: ${error}`);
});

process.on('close', (code) => {
  const dateEnd = new Date();
  console.log('Duration:', dateEnd - dateBegin, 'ms');
  console.log(`child process exited with code ${code}`);
});
