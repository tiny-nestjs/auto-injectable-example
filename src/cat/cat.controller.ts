import { Get, Inject } from '@nestjs/common';
import { CatService } from './cat.service';
import { DogService } from './dog.service';
import { AutoController } from '@tiny-nestjs/auto-injectable';

@AutoController()
export class CatController {
  constructor(
    @Inject('cat') private readonly catService: CatService,
    @Inject('dog') private readonly dogService: DogService,
  ) {}

  @Get('cats')
  getCats() {
    return [...this.dogService.findAll(), ...this.catService.findAll()];
  }
}
