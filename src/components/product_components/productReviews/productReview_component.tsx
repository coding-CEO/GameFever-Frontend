import React from 'react';
import { ReviewData } from '../../../classes/component_classes/review_component_classes/ReviewData';

var classNames = require('classnames');

interface Props {
    reviewData: ReviewData;
}

class ProductReviewComponent extends React.Component<Props, any> {

    getReviewContainerClassName = (): string => {
        let reviewClassName = classNames({
            'rating_number': true,
            'bad': this.props.reviewData.reviewNumber <= 2,
            'average': this.props.reviewData.reviewNumber > 2 && this.props.reviewData.reviewNumber < 4,
            'good': this.props.reviewData.reviewNumber >= 4,
        });
        return reviewClassName;
    }

    render() {
        return (
            <div className="review_container">
                <div className="review_info_container">
                    {/* TODO: fetch user name */}
                    <h3 className="name">{this.props.reviewData.userId}</h3>
                    <h3 className={this.getReviewContainerClassName()}>{this.props.reviewData.reviewNumber}</h3>
                </div>
                <h3 className="review">{this.props.reviewData.reviewMessage}</h3>
            </div>
        );
    }
}

export default ProductReviewComponent;