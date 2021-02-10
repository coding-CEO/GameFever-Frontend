import React from 'react';

import ReviewComponent from './productReview_component';

import { RouteComponentProps } from 'react-router-dom';
import { ReviewData } from '../../classes/component_classes/review_component_classes/ReviewData';

interface Props extends RouteComponentProps {

}

interface State {
    reviews: ReviewData[],
}

class ProductPageReviewsComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            reviews: [],
        }
    }

    componentDidMount = () => {
        //TODO: fetch reviews using pagination....
        this.setReviews();
    }

    setReviews = (): void => {
        this.setState({
            reviews: [new ReviewData(0, 0, "Bad Product", 1.5)],
        })
    }

    render() {
        return (
            <div className="reviews_container col-t-11 col-l-10">
                {this.state.reviews.length > 0 && this.state.reviews.map((review: ReviewData) => {
                    return <ReviewComponent key={review.userId} reviewData={review} />
                })}
            </div>
        );
    }

}

export default ProductPageReviewsComponent;