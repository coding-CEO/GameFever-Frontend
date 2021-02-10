import React from 'react';

import ProductPageReviewsComponent from './productPageReviews_component';
import ErrorMessageContainer from '../error_components/errorMessageContainer_component';
import EditableInput from '../basic_components/input_components/editable_text_input';
import { ErrorMessageManager } from '../../classes/error_classes/ErrorMessageManager';
import { ErrorMessage } from '../../classes/error_classes/ErrorMessage';

import { RouteComponentProps } from 'react-router-dom';
var classNames = require('classnames');

interface Props extends RouteComponentProps {

}

interface State {
    errorManager: ErrorMessageManager;
}

class ProductPageReviewsMainContainer extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            errorManager: new ErrorMessageManager(),
        }

        this.pushError.bind(this);
        this.updateErrorList.bind(this);
    }

    componentWillUnmount() {
        this.state.errorManager.setCallBack(false);
    }

    saveRating = (ratingString: string): void => {
        let ratingNumber: number = parseFloat(ratingString);
        if (!isNaN(ratingNumber)) {
            if (ratingNumber >= 1 && ratingNumber <= 5) {
                console.log(ratingNumber);
            } else {
                this.pushError("Enter Valid Rating");
            }
        } else {
            this.pushError("Enter Valid Rating");
        }
    }

    getReviewContainerClassName = (): string => {
        let reviewClassName = classNames({
            'product_review_container': true,
            'bad': false,
            'average': false,
            'good': true,
        });
        return reviewClassName;
    }

    pushError = (errorMessage: string): void => {
        this.state.errorManager.push(new ErrorMessage(errorMessage), this.updateErrorList);
        this.updateErrorList();
    }

    updateErrorList = (): void => {
        this.setState({ errorManager: this.state.errorManager });
    }

    render() {
        return (
            <div className="product_review_main_container col-t-11 col-d-10">
                <h2>Ratings &amp; Reviews: </h2>
                <div className={this.getReviewContainerClassName()}>
                    <h1 className="rating_number">3.5</h1>
                    <ErrorMessageContainer errors={this.state.errorManager.errors} />
                    <EditableInput placeholder="Enter Rating (1-5)" isEnable={true} defaultValue=""
                        onSave={this.saveRating} maxLength={3} type="number" />
                    <ProductPageReviewsComponent {...this.props} />
                </div>
            </div>
        );
    }

}

export default ProductPageReviewsMainContainer;