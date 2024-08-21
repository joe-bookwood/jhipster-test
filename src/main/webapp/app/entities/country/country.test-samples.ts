import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 1138,
};

export const sampleWithPartialData: ICountry = {
  id: 11930,
};

export const sampleWithFullData: ICountry = {
  id: 11238,
  countryName: 'busily whose yum',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
