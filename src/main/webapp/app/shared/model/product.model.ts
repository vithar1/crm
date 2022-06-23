import { ICategory } from 'app/shared/model/category.model';
import { IImage } from 'app/shared/model/image.model';
import { IOrder } from 'app/shared/model/order.model';

export interface IProduct {
  id?: number;
  name?: string | null;
  description?: string | null;
  price?: number | null;
  amount?: number | null;
  availability?: boolean | null;
  views?: number | null;
  discountPrice?: number | null;
  categories?: ICategory[] | null;
  images?: IImage[] | null;
  orders?: IOrder[] | null;
}

export const defaultValue: Readonly<IProduct> = {
  availability: false,
};
