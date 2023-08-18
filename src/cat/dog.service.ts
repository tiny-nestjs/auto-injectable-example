import { Cat } from './cat.inerface';
import { AutoAlias, AutoInjectable } from '@tiny-nestjs/auto-injectable';

@AutoAlias('dog')
@AutoInjectable()
export class DogService {
  private readonly cats: Cat[] = [
    {
      name: 'test-cat',
      age: 15,
    },
  ];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
