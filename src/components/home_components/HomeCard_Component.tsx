import React from 'react';
import { HomeCard } from '../../classes/component_classes/homecard_component_classes/HomeCard';
import SlidingProductsComponent from '../general_components/sliding_products_component';

import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
    homeCard: HomeCard;
}

class HomeCardComponent extends React.Component<Props, any> {

    hasTitle = (): boolean => {
        return this.props.homeCard.homeCardTitle !== undefined;
    }

    render() {
        return (
            <div className="homeCard_container">
                {this.hasTitle() && <h3>{this.props.homeCard.homeCardTitle}</h3>}
                <SlidingProductsComponent products={this.props.homeCard.products} {...this.props} />
            </div>
        );
    }
}

export default HomeCardComponent;