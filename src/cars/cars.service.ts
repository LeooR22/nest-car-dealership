import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'BMW',
      model: 'X5',
    },
    {
      id: 2,
      brand: 'Audi',
      model: 'A4',
    },
    {
      id: 3,
      brand: 'Mercedes',
      model: 'C class',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

    return car;
  }
}
