import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";


@Injectable()
export class TestCronService {
    // 每秒执行一次 -> 测试
    @Cron('* * * * * *', {name: 'test_cron'})
    handleCron() {
        const str = 'test cron';

        console.log("🚀 ~ test-cron.service.ts:11 ~ TestCronService ~ handleCron ~ str:", str)

    }
}