import { Category } from '../../interfaces/Category';
import { Product } from '../product_classes/product';

export class ElectronicCategory implements Category {
    title: string = "Electronic";
    getProducts(): Product[] {
        // FIXME: add proper functionality.
        throw new Error('Method not implemented.');
    }
}