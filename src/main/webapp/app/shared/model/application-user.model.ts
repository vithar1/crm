import { IUser } from 'app/shared/model/user.model';
import { IOrder } from 'app/shared/model/order.model';

export interface IApplicationUser {
  id?: number;
  user?: IUser | null;
  orders?: IOrder[] | null;
}

export const defaultValue: Readonly<IApplicationUser> = {};
