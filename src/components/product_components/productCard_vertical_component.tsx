import React from 'react';
import { Product } from '../../classes/product_classes/product';

interface Props {
    product: Product;
}

//TODO: complete this.
class ProductCardVertical extends React.Component<Props, any> {

    render() {
        return (
            <div className="productCard_vertical_container">
                this is product card vertical
            </div>
        );
    }
}

export default ProductCardVertical;