import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 32354,
};

export const sampleWithPartialData: IJobHistory = {
  id: 27850,
};

export const sampleWithFullData: IJobHistory = {
  id: 30382,
  startDate: dayjs('2022-08-06T09:40'),
  endDate: dayjs('2022-08-06T07:55'),
  language: 'SPANISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
