import { Product } from '../classes/product_classes/product';

export interface Category {
    title: string;
    getProducts(): Product[];
}