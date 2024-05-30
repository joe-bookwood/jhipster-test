import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 31651,
};

export const sampleWithPartialData: ILocation = {
  id: 11508,
  city: 'Lake Penelope',
  stateProvince: 'oh overclocking',
};

export const sampleWithFullData: ILocation = {
  id: 13971,
  streetAddress: 'tightly brr lest',
  postalCode: 'conductor',
  city: 'Edland',
  stateProvince: 'pro sweetly',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
