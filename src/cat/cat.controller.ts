import { Get } from '@nestjs/common';
import { CatService } from './cat.service';
import { AutoController } from '../lib';

@AutoController()
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get('cats')
  getCats() {
    return this.catService.findAll();
  }
}
