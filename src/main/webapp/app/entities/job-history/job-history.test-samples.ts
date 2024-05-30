import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 30365,
};

export const sampleWithPartialData: IJobHistory = {
  id: 24980,
  endDate: dayjs('2022-08-05T16:54'),
  language: 'ENGLISH',
};

export const sampleWithFullData: IJobHistory = {
  id: 16562,
  startDate: dayjs('2022-08-06T10:32'),
  endDate: dayjs('2022-08-06T01:19'),
  language: 'SPANISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
