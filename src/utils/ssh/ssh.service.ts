import { Inject, Injectable } from '@nestjs/common';
import { SSH_OPTIONS } from './ssh.constants';
import type { SshModuleOptions } from './ssh.inteface';
import { Client } from 'ssh2';
import * as fs from 'fs';

@Injectable()
export class SshService {
  private client: Client = new Client();
  private isConnected: boolean = false;

  constructor(@Inject(SSH_OPTIONS) private options: SshModuleOptions) {}

  connect(): Promise<any> {
    if (this.isConnected) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const privateKey = this.options.privateKey
        ? fs.readFileSync(this.options.privateKey)
        : undefined;
      const newOptions = {
        ...this.options,
        privateKey,
      };

      this.client
        .on('ready', () => {
          this.isConnected = true;
          resolve(true);
        })
        .on('error', (err) => {
          reject(err);
        })
        .connect(newOptions);
    });
  }

  exec(
    cmd: string,
    onData?: any,
  ): Promise<{ code: number; signal: string; output: string }> {
    return new Promise((resolve, reject) => {
      this.client.exec(cmd, (err, stream) => {
        if (err) {
          reject(err);
        }
        let output = '';
        stream
          .on('data', (data: Buffer) => {
            output += data.toString();
            if (onData) {
              onData(data.toString());
            }
          })
          .on('close', (code, signal) => {
            resolve({ code, signal, output });
          })
          .stderr.on('data', (data: Buffer) => {
            output += 'ERROR: ' + data.toString();
            if (onData) {
              onData('ERROR: ' + data.toString());
            }
          });
      });
    });
  }
}
