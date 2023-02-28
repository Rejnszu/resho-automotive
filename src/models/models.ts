export interface CarOffer {
  title: string;
  images: string[];
  description: string;
  model: string;
  brand: string;

  mileage: number;
  year: number;

  engine: string;
  power: number;
  engineCapacity: number;
  fuel: string;
  color: string;
  price: number;
  _id?: string;
}
