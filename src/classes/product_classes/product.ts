// TODO: Give all details
// FIXME: fix all issues
export class Product {
    productId?: number;
    productTitle?: string;
    productImageUrls: string[];

    constructor(productId?: number, productTitle?: string, productImageUrls?: string[]) {
        this.productId = productId;
        this.productTitle = productTitle;
        if(productImageUrls)
            this.productImageUrls = productImageUrls;
        else
            this.productImageUrls = [];
    }
}