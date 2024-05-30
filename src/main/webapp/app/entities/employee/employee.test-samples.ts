import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 11127,
};

export const sampleWithPartialData: IEmployee = {
  id: 26651,
  firstName: 'Chester',
  email: 'Ethan29@yahoo.com',
  hireDate: dayjs('2022-08-05T20:16'),
  commissionPct: 22087,
};

export const sampleWithFullData: IEmployee = {
  id: 3877,
  firstName: 'Malachi',
  lastName: 'Sawayn',
  email: 'Rodolfo.OHara@yahoo.com',
  phoneNumber: 'by with',
  hireDate: dayjs('2022-08-06T10:18'),
  salary: 21688,
  commissionPct: 4785,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
