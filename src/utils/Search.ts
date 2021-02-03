import { Category } from '../interfaces/Category';
import { Product } from '../classes/product_classes/product';
import { HTTP } from './HTTP';
import { Converter } from './Converter';
import { UserHistory } from '../classes/user_classes/UserHistory';

export class Search {

    private userHistory: UserHistory;

    constructor(){
        this.userHistory = new UserHistory();
    }

    searchProductByName = (productName: string): Product[] => {
        // TODO: Implementaion Here
        let data = HTTP.get("product/1");
        if(data){
            //TODO: you can add to history here
            // this.addSearchToHistory();
            return Converter.toProductList(data);
        }
        return [];
    }

    searchProductByCategory = (category: Category): Product[] => {
        return category.getProducts();
    }

    addSearchToHistory = (historyInfo: string): void => {
        this.userHistory.addToHistory(historyInfo);
    }
}