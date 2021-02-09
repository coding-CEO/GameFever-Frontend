import React from 'react';

import Banners from './Banners';
import HomeCards from './HomeCards';

import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {

}

class HomePage extends React.Component<Props, any> {

    render() {
        return (
            <div className="home_container">
                <Banners />
                <HomeCards {...this.props} />
            </div>
        );
    }
}

export default HomePage;