import React from 'react';

//TODO: remove images
import tempImg from '../../static/images/temp.png';
import tempImg1 from '../../static/images/temp3.jpg';

import { Product } from '../../classes/product_classes/product';
import { ErrorHandler } from '../../utils/ErrorHandler';

import ProductPageImages from './productPage_Images_component';
import ProductPageDetails from './productPage_details_component';
import ProductPageReviewsMainContainer from './productReviews/productPage_reviews_main_component';

import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {

}

interface State {
    product: Product;
    params: Object;
}

class ProductPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            product: new Product(),
            params: this.props.match.params,
        }
    }

    componentDidMount = () => {
        //TODO: fetch product details
        this.setProductInState();
    }

    getProductIdFromParams = (params: any): number => {
        if (params.productId && !isNaN(params.productId))
            return parseInt(params.productId);
        ErrorHandler.ERROR404(this.props.history);
        return -1;
    }

    setProductInState = () => {
        this.setState({
            product: new Product(this.getProductIdFromParams(this.state.params), 'Title of Product',
                [tempImg, tempImg1]),
        })
    }

    //TODO: divide these divs in small components
    render() {
        return (
            <div className="product_page_container">
                <div className="product_main_content_container col-t-11 col-d-10">
                    <ProductPageImages imageUrls={this.state.product.productImageUrls} />
                    <ProductPageDetails product={this.state.product} />
                </div>
                <ProductPageReviewsMainContainer {...this.props} />
                <div className="product_auto_suggestion_container">
                    {/* TODO: complete this*/}
                </div>
            </div>
        );
    }

}

export default ProductPage;