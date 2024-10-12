export interface Country {
  countryData: {
    name: string;
    capitalCity: string;
    region: {value: string};
    incomeLevel: {value: string};
    longitude: string;
    latitude: string;
  }
  population: number;
}
