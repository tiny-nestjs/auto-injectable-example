import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { DogModule } from './dog/dog.module';

@Module({
  imports: [CatModule, DogModule],
})
export class AnimalModule {}
