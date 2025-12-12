import { Provider } from "@nestjs/common";
import { LogDbCronService } from "./log-db-cron.service";
// import { TestCronService } from "./test-cron.service";


export const CronProviders: Provider[] = [LogDbCronService]