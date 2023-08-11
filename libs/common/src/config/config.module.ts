import { Module } from '@nestjs/common';
import { ConfigModule as NestConfingModule } from '@nestjs/config';

@Module({
  imports: [NestConfingModule.forRoot()],
})
export class ConfigModule {}
