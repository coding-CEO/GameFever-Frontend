import React from 'react';

import Banners from './Banners';
import HomeCards from './HomeCards';

interface Props {

}

class Home extends React.Component<Props, any> {

    render() {
        return (
            <div className="home_container">
                <Banners />
                <HomeCards />
                <HomeCards />
            </div>
        );
    }
}

export default Home;