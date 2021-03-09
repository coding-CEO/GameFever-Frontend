export class ReviewData {
    userId: number;
    productId: number;
    reviewMessage: string;
    reviewNumber: number;

    constructor(userId: number, productId: number, reviewMessage: string, reviewNumber: number) {
        this.userId = userId;
        this.productId = productId;
        this.reviewMessage = reviewMessage;
        this.reviewNumber = reviewNumber;
    }
}