import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 30607,
};

export const sampleWithPartialData: ITask = {
  id: 26529,
  title: 'because now',
};

export const sampleWithFullData: ITask = {
  id: 14476,
  title: 'showy an hyena',
  description: 'brr',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
