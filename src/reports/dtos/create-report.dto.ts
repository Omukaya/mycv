import { IsString, IsNumber } from 'class-validator';

export class CreateReortDto {
  make: string;

  model: string;

  year: number;

  mileage: number;

  lng: number;

  lat: number;

  price: number;
}
