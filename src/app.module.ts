import { Module } from '@nestjs/common';
import { ComponentScan } from '@tiny-nestjs/auto-injectable';

@ComponentScan()
@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
