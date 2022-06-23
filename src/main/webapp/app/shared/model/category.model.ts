import { IProduct } from 'app/shared/model/product.model';

export interface ICategory {
  id?: number;
  name?: string | null;
  description?: string | null;
  products?: IProduct[] | null;
}

export const defaultValue: Readonly<ICategory> = {};
