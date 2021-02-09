export class Product {
    productId: number;
    productTitle: string;
    productImageUrls: string[];
    // TODO: Give all details

    constructor(productId: number, productTitle: string, productImageUrls: string[]) {
        this.productId = productId;
        this.productTitle = productTitle;
        this.productImageUrls = productImageUrls;
    }
}