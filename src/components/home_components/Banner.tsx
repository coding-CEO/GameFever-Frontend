import React from 'react';

import { Banner } from '../../classes/component_classes/banner_component_classes/Banner';

import NormalImage from '../basic_components/image_components/normal_image_component';

interface Props {
    banner: Banner;
}

//TODO: complete this.
class BannerComponent extends React.Component<Props, any> {

    render() {
        //TODO: remove this debug
        console.log(this.props.banner.bannerId);
        return (
            <div className="banner_container">
                <NormalImage imgUrl={this.props.banner.bannerImgUrl} alternateText="Banner Image"
                    borderRadiusInPx={0} />
            </div>
        );
    }
}

export default BannerComponent;