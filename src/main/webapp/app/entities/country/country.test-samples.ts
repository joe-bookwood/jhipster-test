import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 1279,
};

export const sampleWithPartialData: ICountry = {
  id: 10725,
};

export const sampleWithFullData: ICountry = {
  id: 13145,
  countryName: 'vengeance aha',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
