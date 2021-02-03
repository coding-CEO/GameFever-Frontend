import { Category } from '../../interfaces/Category';
import { Product } from '../product_classes/product';

export class FashionCategory implements Category {
    title: string = "Fashion";
    getProducts(): Product[] {
        // FIXME: add proper functionality.
        throw new Error('Method not implemented.');
    }
}