import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 2094,
};

export const sampleWithPartialData: IJob = {
  id: 25335,
  jobTitle: 'National Research Architect',
  minSalary: 10761,
};

export const sampleWithFullData: IJob = {
  id: 23705,
  jobTitle: 'Central Applications Consultant',
  minSalary: 644,
  maxSalary: 10129,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
