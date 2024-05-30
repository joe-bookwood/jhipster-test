import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 2585,
};

export const sampleWithPartialData: IRegion = {
  id: 7016,
  regionName: 'than',
};

export const sampleWithFullData: IRegion = {
  id: 20685,
  regionName: 'naming',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
