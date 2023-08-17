import { Get } from '@nestjs/common';
import { AutoController } from '@tiny-nestjs/auto-injectable';
import { DogService } from './dog.service';

@AutoController()
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get('dogs')
  getCats() {
    return this.dogService.findAll();
  }
}
