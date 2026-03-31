import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 8899,
};

export const sampleWithPartialData: IEmployee = {
  id: 29906,
  firstName: 'Neil',
  lastName: 'Kuvalis',
  email: 'Ivan.DuBuque29@yahoo.com',
  phoneNumber: 'preregister whose broadcast',
  salary: 9573,
};

export const sampleWithFullData: IEmployee = {
  id: 19019,
  firstName: 'Kayla',
  lastName: 'Wiegand',
  email: 'Alton.Grimes@gmail.com',
  phoneNumber: 'vacantly',
  hireDate: dayjs('2022-08-05T13:42'),
  salary: 21307,
  commissionPct: 7424,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
