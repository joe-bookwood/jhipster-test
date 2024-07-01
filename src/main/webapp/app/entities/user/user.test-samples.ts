import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: '5ead4ed1-d7d3-4a82-b6ec-10a160ed876d',
  login: '9VjZXM',
};

export const sampleWithPartialData: IUser = {
  id: '16c19a25-5c01-4af8-8d16-b5c29bd50bfe',
  login: 'p3Iq@MC\\AL94Cp8\\&dv',
};

export const sampleWithFullData: IUser = {
  id: '1efae952-e8fc-4c3e-a116-17e3fb041cfd',
  login: 'rknL@oE\\WG7a\\;RIEw',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
