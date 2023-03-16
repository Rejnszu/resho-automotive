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
  email?: string;
  phone?: number;
  name?: string;
}

export interface User {
  email: string;
  name: string;
  password: string;
  phone: number;
  offers?: CarOffer[];
}

export interface FilterObject {
  model: string;
  brand: string;
  year: string;
  fuel: string;
  color: string;
  powerUpperLevel: number;
  powerLowerLevel: number;
  mileageUpperLevel: number;
  mileageLowerLevel: number;
  engineCapacityUpperLevel: number;
  engineCapacityLowerLevel: number;
  priceUpperLevel: number;
  priceLowerLevel: number;
}
