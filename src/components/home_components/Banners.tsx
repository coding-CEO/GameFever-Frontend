import React from 'react';

import { Banner } from '../../classes/component_classes/banner_component_classes/Banner';

import banner_img from '../../static/images/temp.png';
import leftArrowIcon from '../../static/images/left-arrow.svg';
import rightArrowIcon from '../../static/images/right-arrow.svg'

import NormalImage from '../basic_components/image_components/normal_image_component';
import BannerComponent from './Banner';

interface Props {

}

interface State {
    banners: Banner[];
    activeBannerIndex: number;
}

//TODO: complete this.
class Banners extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            banners: [],
            activeBannerIndex: -1,
        }
        this.setBanners.bind(this);
        this.canShowBanners.bind(this);
        this.changeBanner.bind(this);
    }

    componentDidMount() {
        //TODO: fetch and set banners here...
        this.setBanners();
    }

    setBanners = (): void => {
        this.setState({
            banners: [new Banner(0, banner_img), new Banner(1, banner_img), new Banner(2, banner_img)],
            activeBannerIndex: 0,
        })
    }

    canShowBanners = (): boolean => {
        return this.state.banners.length > 0 && this.state.activeBannerIndex > -1;
    }

    changeBanner = (changeCoefficient: number): void => {
        if (this.state.activeBannerIndex >= 0) {
            let activeBannerIndex = this.state.activeBannerIndex;
            activeBannerIndex += changeCoefficient;
            if (activeBannerIndex < 0)
                activeBannerIndex = 0;
            if (activeBannerIndex >= this.state.banners.length)
                activeBannerIndex = this.state.banners.length - 1;

            this.setState({ activeBannerIndex: activeBannerIndex });
        }
    }

    render() {
        return (
            <div className="banners_main_container">
                <div className="left_arrow_container" onClick={() => this.changeBanner(-1)}>
                    <NormalImage imgUrl={leftArrowIcon} widthInPx={30} />
                </div>
                <div className="banners_container col-t-12">
                    {this.canShowBanners() && this.state.banners.map((banner, index) => {
                        return (
                            this.state.activeBannerIndex === index &&
                            <BannerComponent key={banner.bannerId} banner={banner} />
                        )
                    })}
                </div>
                <div className="right_arrow_container" onClick={() => this.changeBanner(1)}>
                    <NormalImage imgUrl={rightArrowIcon} widthInPx={30} />
                </div>
            </div>
        );
    }
}

export default Banners;