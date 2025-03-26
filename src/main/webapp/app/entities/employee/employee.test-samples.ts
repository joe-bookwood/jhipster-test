import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 418,
};

export const sampleWithPartialData: IEmployee = {
  id: 24956,
  lastName: 'Rau',
  salary: 30638,
};

export const sampleWithFullData: IEmployee = {
  id: 12001,
  firstName: 'Vicente',
  lastName: 'Windler',
  email: 'Ernestine11@yahoo.com',
  phoneNumber: 'deracinate dump down',
  hireDate: dayjs('2022-08-05T13:53'),
  salary: 17727,
  commissionPct: 31747,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
