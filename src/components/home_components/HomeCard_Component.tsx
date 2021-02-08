import React from 'react';
import { HomeCard } from '../../classes/component_classes/homecard_component_classes/HomeCard';
import SlidingProductsComponent from '../general_components/sliding_products_component';

interface Props {
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
                <SlidingProductsComponent products={this.props.homeCard.products} />
            </div>
        );
    }
}

export default HomeCardComponent;