import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 32007,
};

export const sampleWithPartialData: IJob = {
  id: 28374,
  jobTitle: 'Corporate Branding Director',
};

export const sampleWithFullData: IJob = {
  id: 31070,
  jobTitle: 'Principal Marketing Associate',
  minSalary: 8239,
  maxSalary: 15371,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
