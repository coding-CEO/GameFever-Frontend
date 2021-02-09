import React from 'react';

import tempImg from '../../static/images/temp.png';
import tempImg2 from '../../static/images/temp2.jpg';

import { HomeCard } from '../../classes/component_classes/homecard_component_classes/HomeCard';
import { Product } from '../../classes/product_classes/product';

import HomeCardComponent from './HomeCard_Component';

import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {

}

interface State {
    homeCards: HomeCard[];
}

class HomeCards extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            homeCards: [],
        }
    }

    componentDidMount() {
        //TODO: fetch and set home cards
        this.setHomeCards();
    }

    setHomeCards = (): void => {
        this.setState({
            homeCards: [new HomeCard(0, [
                new Product(0, "hp", [tempImg]),
                new Product(1, 'mobile', [tempImg2]),
                new Product(2, 'Iron man title of this product', [tempImg])
            ], "Title"), new HomeCard(1, [])],
        })
    }

    render() {
        return (
            <div className="homeCards_container col-t-11 col-l-10">
                {this.state.homeCards.length > 0 && this.state.homeCards.map((homeCard) => {
                    return <HomeCardComponent key={homeCard.homecardId} homeCard={homeCard} {...this.props} />;
                })}
            </div>
        );
    }
}

export default HomeCards;