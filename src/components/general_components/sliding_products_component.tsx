import React from 'react';

import leftArrowIcon from '../../static/images/left-arrow.svg';
import rightArrowIcon from '../../static/images/right-arrow.svg'

import { Product } from '../../classes/product_classes/product';

import NormalImage from '../basic_components/image_components/normal_image_component';
import ProductCardVertical from '../product_components/productCard_vertical_component';

import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
    products: Product[],
}

class SlidingProductsComponent extends React.Component<Props, any> {

    constructor(props: Props) {
        super(props);
        this.leftSlide.bind(this);
        this.rightSlide.bind(this);
    }

    leftSlide = (): void => {
        //TODO: complete this
    }

    rightSlide = (): void => {
        //TODO: complete this
    }

    render() {
        return (
            <div className="slidingProducts_container">
                <div className="left_arrow_container" onClick={this.leftSlide}>
                    <NormalImage imgUrl={leftArrowIcon} widthInPx={30} />
                </div>
                <div className="productCards_container col-t-12">
                    {this.props.products.length > 0 && this.props.products.map((product: Product) => {
                        return <ProductCardVertical key={product.productId} product={product} {...this.props} />
                    })}
                </div>
                <div className="right_arrow_container" onClick={this.rightSlide}>
                    <NormalImage imgUrl={rightArrowIcon} widthInPx={30} />
                </div>
            </div>
        );
    }
}

export default SlidingProductsComponent;