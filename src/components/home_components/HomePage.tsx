import React from 'react';

import Banners from './Banners';
import HomeCards from './HomeCards';

interface Props {

}

class HomePage extends React.Component<Props, any> {

    render() {
        return (
            <div className="home_container">
                <Banners />
                <HomeCards />
            </div>
        );
    }
}

export default HomePage;