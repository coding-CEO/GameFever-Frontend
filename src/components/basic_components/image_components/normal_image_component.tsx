import React from 'react';

interface Props {
    imgUrl: string;
    alternateText?: string;
    heightInPx?: number;
    widthInPx?: number;
    borderRadiusInPx?: number;
    onClick?: Function;
}

class NormalImageComponent extends React.Component<Props, any> {

    render() {
        return (
            <div className="normal_img_container"
                onClick={() => {
                    if (this.props.onClick)
                        this.props.onClick();
                }}
                style={{
                    height: this.props.heightInPx,
                    width: this.props.widthInPx,
                    borderRadius: this.props.borderRadiusInPx
                }}>
                <img src={this.props.imgUrl} alt={this.props.alternateText}
                    style={{
                        borderRadius: this.props.borderRadiusInPx,
                    }} />
            </div>
        );
    };
}

export default NormalImageComponent;