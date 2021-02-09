import React from 'react';
import { Product } from '../../classes/product_classes/product';

interface Props {
    product: Product;
}

class ProductPageDetais extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
        //TODO: function ref
    }

    render() {
        return (
            <div className="product_details_container">
                <h2>{this.props.product.productTitle}</h2>
            </div>
        );
    }

}

export default ProductPageDetais;