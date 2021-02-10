import React from 'react';

import leftArrowIcon from '../../static/images/left-arrow.svg';
import rightArrowIcon from '../../static/images/right-arrow.svg'

import NormalImage from '../basic_components/image_components/normal_image_component';

interface Props {
    imageUrls: string[];
}

interface State {
    activeImageIndex: number;
}

class ProductPageImages extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            activeImageIndex: 0,
        }
    }

    setPosterImage = (index: number) => {
        this.setState({ activeImageIndex: index });
    }

    render() {
        return (
            <div className="product_images_main_container">
                <div className="posterImageContainer">
                    <NormalImage imgUrl={this.props.imageUrls[this.state.activeImageIndex]} />
                </div>
                <div className="slidingProducts_container">
                    <div className="left_arrow_container">
                        <NormalImage imgUrl={leftArrowIcon} widthInPx={30} />
                    </div>
                    <div className="productCards_container col-t-12">
                        {this.props.imageUrls.length > 0 && this.props.imageUrls.map((imageUrl: string, index) => {
                            return (
                                <div className="productPageImg_container"
                                    key={imageUrl}
                                    onClick={() => this.setPosterImage(index)}>
                                    <NormalImage imgUrl={imageUrl} widthInPx={60} />
                                </div>
                            )
                        })}
                    </div>
                    <div className="right_arrow_container">
                        <NormalImage imgUrl={rightArrowIcon} widthInPx={30} />
                    </div>
                </div>
            </div>
        );
    }

}

export default ProductPageImages;