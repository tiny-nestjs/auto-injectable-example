import { Get } from '@nestjs/common';
import { CatService } from '../service/cat.service';
import { AutoController } from '@tiny-nestjs/auto-injectable';

@AutoController()
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get('cats')
  getCats() {
    return this.catService.findAll();
  }
}
