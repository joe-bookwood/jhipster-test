import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 'c5e6c61a-5780-4354-9446-73128d6499b1',
  login: '8E~{j@WdF3',
};

export const sampleWithPartialData: IUser = {
  id: '5efcde8e-b311-4dca-965f-4e491c660ee3',
  login: 'Uo-S',
};

export const sampleWithFullData: IUser = {
  id: 'c35421d1-097f-4f75-b673-24985fa30a50',
  login: '6&uSn@XX\\"eK\\ssQcCkY\\&3f\\$Bs1',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
