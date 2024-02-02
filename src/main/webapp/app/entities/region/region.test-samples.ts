import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 31632,
};

export const sampleWithPartialData: IRegion = {
  id: 32506,
  regionName: 'poorly',
};

export const sampleWithFullData: IRegion = {
  id: 32490,
  regionName: 'chill verbally',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
