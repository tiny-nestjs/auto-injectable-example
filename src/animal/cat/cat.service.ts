import { Cat } from './cat.inerface';
import { AutoInjectable } from '@tiny-nestjs/auto-injectable';

@AutoInjectable()
export class CatService {
  private readonly cats: Cat[] = [
    {
      name: 'test-cat',
      age: 5,
    },
  ];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
