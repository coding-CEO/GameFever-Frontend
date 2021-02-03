import { Product } from '../product_classes/product';
import { Search } from '../../utils/Search';
import { ContentManager } from '../content_classes/ContentManager';

export class GuestUser {
    contentManager: ContentManager;
    search: Search;

    constructor(){
        //TODO: initialize fields
        this.contentManager = new ContentManager();
        this.search = new Search();
    }

    getProductDetails = (productId: number): Product => {
        // TODO: implementation goes here...
        throw new Error("implement this method");
    }
}