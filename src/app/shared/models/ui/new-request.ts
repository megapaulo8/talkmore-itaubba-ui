import { UserData } from '../user/user-data';
import { ModelBase } from '../abstract/model-base';

export interface NewRequest extends UserData, ModelBase {
  tax?: string;
  cnpj?: string;
  plan?: string;
  sendData?: Date;
  planValue?: string;
  timeMinutes?: string;
  accessionDate?: string;
}
