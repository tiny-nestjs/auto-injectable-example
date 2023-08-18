import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { ComponentScan } from '@tiny-nestjs/auto-injectable';

@ComponentScan()
@Module({
  imports: [CatModule],
})
export class AppModule {}
