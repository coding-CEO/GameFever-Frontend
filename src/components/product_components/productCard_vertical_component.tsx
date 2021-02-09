import React from 'react';

import { Product } from '../../classes/product_classes/product';
import { Route } from '../../utils/Route';

import NormalImage from '../basic_components/image_components/normal_image_component';

import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
    product: Product;
}

class ProductCardVertical extends React.Component<Props, any> {

    goToProductPage = (): void => {
        let route: string = `/product/${this.props.product.productId}`;
        Route.goToRoute(route, this.props.history);
    }

    render() {
        return (
            <div className="productCard_vertical_container" onClick={this.goToProductPage}>
                <div className="productCard_img_container">
                    <NormalImage imgUrl={this.props.product.productImageUrls[0]} borderRadiusInPx={2} />
                </div>
                <div className="text_container">
                    <h2>{this.props.product.productTitle}</h2>
                </div>
                <div className="text_container">
                    <h4>{this.props.product.productTitle}</h4>
                </div>
            </div>
        );
    }
}

export default ProductCardVertical;