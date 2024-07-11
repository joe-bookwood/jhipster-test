import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 16311,
  departmentName: 'unaccountably',
};

export const sampleWithPartialData: IDepartment = {
  id: 27008,
  departmentName: 'hm grim',
};

export const sampleWithFullData: IDepartment = {
  id: 15502,
  departmentName: 'bunkhouse whenever',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'extra-small gravel card',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
