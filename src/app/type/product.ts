
import { Category } from "./Category";
export type Product = {
    _id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    rate: number;
  };

  export type ProductAdmin = Omit<Product,'id' | 'category'> & {
    _id: string;
    category: Category;
  }
  export type ProductAdd = Omit<Product, 'id' | 'rate'>;