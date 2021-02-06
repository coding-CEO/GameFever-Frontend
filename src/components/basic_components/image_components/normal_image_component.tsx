import React from 'react';

interface Props {
    imgUrl: string;
    alternateText?: string;
    heightInPx?: number;
}

class NormalImageComponent extends React.Component<Props, any> {
    
    render(){
        return (
            <div className="normal_img_container" style={{height: this.props.heightInPx}}>
                <img src={this.props.imgUrl} alt={this.props.alternateText}/>
            </div>
        );
    };
}

export default NormalImageComponent;