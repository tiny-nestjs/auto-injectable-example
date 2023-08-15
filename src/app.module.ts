import { Module } from '@nestjs/common';
import { ComponentScan } from './lib';

@ComponentScan()
@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
