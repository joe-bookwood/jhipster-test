import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '7b2ad470-6be4-4e2f-a9ef-c8dcd3f413d0',
};

export const sampleWithPartialData: IAuthority = {
  name: '0feb85d2-9fe8-4782-9696-17447558ecd2',
};

export const sampleWithFullData: IAuthority = {
  name: '8a412483-6c82-4af8-8bb8-eb1d79a6d204',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
