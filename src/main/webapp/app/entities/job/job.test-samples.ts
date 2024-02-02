import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 10279,
};

export const sampleWithPartialData: IJob = {
  id: 10373,
  minSalary: 5779,
  maxSalary: 26407,
};

export const sampleWithFullData: IJob = {
  id: 25335,
  jobTitle: 'National Research Architect',
  minSalary: 10761,
  maxSalary: 23705,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
