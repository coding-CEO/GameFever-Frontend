import React from 'react';

interface Props {
    imgUrl: string;
    alternateText?: string;
    heightInPx?: number;
    widthInPx?: number;
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
                style={{ height: this.props.heightInPx, width: this.props.widthInPx }}>
                <img src={this.props.imgUrl} alt={this.props.alternateText} />
            </div>
        );
    };
}

export default NormalImageComponent;