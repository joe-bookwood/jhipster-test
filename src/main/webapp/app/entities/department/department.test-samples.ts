import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 9434,
  departmentName: 'boo bah',
};

export const sampleWithPartialData: IDepartment = {
  id: 11144,
  departmentName: 'handover',
};

export const sampleWithFullData: IDepartment = {
  id: 26551,
  departmentName: 'neat engineering',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'stepmother phew sick',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
