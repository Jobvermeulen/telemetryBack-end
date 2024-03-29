import { Module } from '@nestjs/common';
import {TelemetryModule} from "./telemetry/telemetry.module";
import {TypeOrmModule} from "@nestjs/typeorm";

import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
      TelemetryModule,
      TypeOrmModule.forRoot({
        type        : 'mysql',
        host        : process.env.DB_HOST,
        port        : Number(process.env.DB_PORT),
        username    : process.env.DB_USERNAME,
        password    : process.env.DB_PASSWORD,
        database    : process.env.DB_DATABASE,
        entities    : [__dirname + '/entities/*.entity{.ts,.js}'],
        synchronize : false,
      }),
  ],
})
export class AppModule {}
