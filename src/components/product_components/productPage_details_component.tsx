import React from 'react';
import { Product } from '../../classes/product_classes/product';

interface Props {
    product: Product;
}

class ProductPageDetais extends React.Component<Props, any> {
    // constructor(props: Props) {
    //     super(props);
    //     //TODO: function ref
    // }

    render() {
        return (
            <div className="product_details_container">
                <h3>{this.props.product.productTitle}</h3>
                <div className="price_container">
                    <h2 className="selling_price">$1234</h2>
                    <h4 className="original_price"><del>$2345</del></h4>
                    <h4 className="discount_percentage">10% off</h4>
                </div>
                <div className="description_container">
                    <h2>Description: </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error officia quaerat autem nostrum repudiandae voluptas
                        voluptatum possimus quo soluta non?</p>
                </div>
            </div>
        );
    }

}

export default ProductPageDetais;