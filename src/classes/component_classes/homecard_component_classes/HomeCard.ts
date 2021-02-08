import { Product } from "../../product_classes/product";

export class HomeCard {
    homecardId: number;
    homeCardTitle?: string;
    products: Product[];

    constructor(homecardId: number, products: Product[], homeCardTitle?: string){
        this.homecardId = homecardId;
        this.products = products;
        this.homeCardTitle = homeCardTitle;
    }
}