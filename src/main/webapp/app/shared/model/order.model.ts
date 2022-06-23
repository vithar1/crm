import dayjs from 'dayjs';
import { IProduct } from 'app/shared/model/product.model';
import { IApplicationUser } from 'app/shared/model/application-user.model';
import { OrderStatus } from 'app/shared/model/enumerations/order-status.model';

export interface IOrder {
  id?: number;
  acceptTime?: string | null;
  completeTime?: string | null;
  status?: OrderStatus | null;
  products?: IProduct[] | null;
  applicationUser?: IApplicationUser | null;
}

export const defaultValue: Readonly<IOrder> = {};
