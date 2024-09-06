import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 16218,
};

export const sampleWithPartialData: ILocation = {
  id: 26252,
  postalCode: 'woeful congressperson',
  stateProvince: 'vineyard gee',
};

export const sampleWithFullData: ILocation = {
  id: 17803,
  streetAddress: 'when',
  postalCode: 'retina',
  city: 'Sanfordview',
  stateProvince: 'sage nestmate flan',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
