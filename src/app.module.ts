import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT as unknown as number,
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USERNAME,
      database: process.env.SCHEMA_NAME,
      synchronize: true,
      autoLoadEntities: true,
    }),
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
