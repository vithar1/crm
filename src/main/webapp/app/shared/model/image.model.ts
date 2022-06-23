import { IProduct } from 'app/shared/model/product.model';

export interface IImage {
  id?: number;
  imageURL?: string | null;
  products?: IProduct[] | null;
}

export const defaultValue: Readonly<IImage> = {};
