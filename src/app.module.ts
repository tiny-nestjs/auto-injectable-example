import { Module } from '@nestjs/common';
import { ComponentScan } from '@tiny-nestjs/auto-injectable';

@ComponentScan()
@Module({
  imports: [],
})
export class AppModule {}
