import React from 'react';
import { HomeCard } from '../../classes/component_classes/homecard_component_classes/HomeCard';
import { Product } from '../../classes/product_classes/product';
import HomeCardComponent from './HomeCard_Component';

interface Props {

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
            homeCards: [new HomeCard(0, [new Product(0, "hp"), new Product(1, 'mobile')], "Title"), new HomeCard(1, [])],
        })
    }

    render() {
        return (
            <div className="homeCards_container">
                {this.state.homeCards.length > 0 && this.state.homeCards.map((homeCard) => {
                    return <HomeCardComponent key={homeCard.homecardId} homeCard={homeCard} />;
                })}
            </div>
        );
    }
}

export default HomeCards;