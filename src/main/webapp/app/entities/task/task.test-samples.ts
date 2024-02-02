import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 18099,
};

export const sampleWithPartialData: ITask = {
  id: 1800,
};

export const sampleWithFullData: ITask = {
  id: 18475,
  title: 'knowing despite huzzah',
  description: 'bike um',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
