import { Category } from "../interfaces/Category";
import { ElectronicCategory } from '../classes/category_classes/ElectronicCategory';
import { FashionCategory } from '../classes/category_classes/FashionCategory';

//TODO: add remaining
export let CategoryList: Category[] = [new ElectronicCategory(), new FashionCategory()];