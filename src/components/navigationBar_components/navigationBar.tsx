import React from 'react';
import temp from '../../static/images/temp.png';//TODO: temperary
import shoppingCartIcom from '../../static/images/cart.png';

import MainSearch from './search_component';
import NavigationBarTabs from './navigationBar_tabs_component';
import NormalImage from '../basic_components/image_components/normal_image_component';
import NormalButton from '../basic_components/button_components/normal_button_component';

import { RouteComponentProps } from 'react-router-dom';
import { CategoryList } from '../../utils/CategoryList';

interface Props extends RouteComponentProps {

}

interface State {

}

class NavigationBar extends React.Component<Props, State> {

    debugClick = () => {
        //TODO: temperary
    }

    render() {
        return (
            <nav>
                <div className="nav_container col-t-11 col-l-10">
                    <div className="nav_top_container">
                        <div className="nav_logo_account_info_container">
                            <div className="main_logo_container">
                                <NormalImage imgUrl={temp} widthInPx={60} />
                            </div>
                            <div className="nav_account_info_container">
                                <NormalButton title="Login" isEnable={true} onClick={this.debugClick} />
                                <NormalButton title="Sign Up" isEnable={true} onClick={this.debugClick} />
                                {/* <div className="nav_account_icon_container">
                                    //TODO: complete this...
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="main_search_cart_container col-12">
                        <MainSearch />
                        <NormalImage imgUrl={shoppingCartIcom} widthInPx={45} />
                    </div>
                    <NavigationBarTabs categoryList={CategoryList} {...this.props} />
                </div>
            </nav>
        );
    }
}

export default NavigationBar;