import { Injectable } from "@nestjs/common";
import { SshService } from "@/utils/ssh/ssh.service";
import { Cron } from "@nestjs/schedule";
import { ConfigurationService } from "@/common/configuration/configuration.service";
import { ConfigEnum } from "@/common/enum/config.enum";

@Injectable()
export class LogDbCronService {
    constructor(private sshService: SshService, private configService: ConfigurationService) {}

    // 每天凌晨 0 点整执行
    @Cron('0 0 0 * * *', { name: 'logdb-cron'})
    async handleCron() {
        // 备份：连接到 MongoDB 并导出对应的 db 中的 collections 的数据
        // 滚动记录： 删除已有的 collections 的数据
        // 1. 删除当前 collections 中的 已备份的数据
        // 2. 之前备份的 collections -> 对比 collections 备份的时间， 如果超过 t 天/hours 的规则，则删除

        const dockerCotainerName = 'nestjs-demo-mongo-1'
        const uri = this.configService.getKey(ConfigEnum.LOG_DB)
        const now = new Date();
        const collectionName = this.configService.getKey(ConfigEnum.LOG_COLLECTION);

        const outputPath = `/tmp/logs-${now.getTime()}`;
        const hostBackupPath = '/srv/logs';

        // 导出 log 表， 并复制到 backupPath 上
        const cmd = `docker exec -i ${dockerCotainerName} mongodump --uri=${uri} --collection=${collectionName} --out=${outputPath}`
        const cpCmd = `docker cp ${dockerCotainerName}:${outputPath} ${hostBackupPath}`;
        await this.sshService.exec(`${cmd} && ${cpCmd}`);
        await this.sshService.exec(`ls -la ${hostBackupPath}`);

        // -mtime +7 表示 7 天前的文件
        // -mmin +1 表示 1 分钟前的文件
        const delCmd =  `find ${hostBackupPath} -type d -mtime +7 -exec rm -rf {} \\;`
        await this.sshService.exec(delCmd);

        const res = await this.sshService.exec(`ls -la ${hostBackupPath}`);

        console.log("🚀 ~ log-db-cron.service.ts:35 ~ LogDbCronService ~ handleCron ~ res:", res)

        
    }

    
}