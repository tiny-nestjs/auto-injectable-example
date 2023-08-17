import { AutoInjectable } from '@tiny-nestjs/auto-injectable';
import { Dog } from './dog.inerface';

@AutoInjectable()
export class DogService {
  private readonly dogs: Dog[] = [
    {
      name: 'test-dog',
      age: 3,
    },
  ];

  create(cat: Dog) {
    this.dogs.push(cat);
  }

  findAll(): Dog[] {
    return this.dogs;
  }
}
