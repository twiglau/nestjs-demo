import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { ConfigurationService } from 'src/common/configuration/configuration.service';

const NODE_ENV = process.env.NODE_ENV;
const isProduction = NODE_ENV === 'production';
const envFilePath = ['.env'];

if (isProduction) {
  envFilePath.unshift(`.env.${NODE_ENV || `production`}`);
} else {
  envFilePath.unshift(`.env.${NODE_ENV || `development`}`);
}

const validationSchema = Joi.object({
  APP_PORT: Joi.number().default(3000),
  NODE_ENV: Joi.string()
    .valid('production', 'development', 'test')
    .default('development'),
  APP_VERSION: Joi.string().default('1'),
  APP_PREFIX: Joi.string().default('/api'),
  DB_HOST: Joi.string().default('localhost'),
  // DATABASE_HOST: Joi.string().ip().default('localhost'),
  DB_PORT: Joi.number().valid(5432, 5431, 5430).default(5432),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
});

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
      validationSchema,
    }),
  ],
  providers: [ConfigurationService],
  exports: [ConfigurationService],
})
export class ConfigurationModule {}
