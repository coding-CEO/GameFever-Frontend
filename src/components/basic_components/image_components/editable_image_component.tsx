import React from 'react';
import NormalImageComponent from './normal_image_component';
import ImageChooseComponent from './image_choose_component';
import NormalButton from '../button_components/normal_button_component';

interface Props {
    isEnable: boolean;
    imgUrl?: string;
    heightInPx?: number;
    onSave?(img: Blob): void;
    alternateText?: string;
}

interface State {
    imgUrl?: string;
    imgObj: Blob;
}

class EditableImageComponent extends React.Component<Props, State> {
    
    constructor(props: Props){
        super(props);
        this.state = {
            imgUrl: this.props.imgUrl,
            imgObj: new Blob(),
        }
        this.handleImageChange.bind(this);
    }

    getImgUrl = ():string => {
        if(this.state.imgUrl){
            if(this.state.imgUrl === this.props.imgUrl)
                return this.state.imgUrl;
            return URL.createObjectURL(this.state.imgObj);
        }
        return "";
    }

    handleImageChange = (input: React.ChangeEvent<HTMLInputElement>): void => {
        if(input.target && input.target.files && input.target.files[0]){
            this.setState({imgObj: input.target.files[0], imgUrl: input.target.value});
        }
    }

    showEditOption = (): JSX.Element => {
        if(this.canShowEditOption()){
            return <NormalButton title="Save" isEnable={this.props.isEnable} onClick={() => {
                if(this.props.onSave)
                    this.props.onSave(this.state.imgObj);
            }}/>;
        }
        return <React.Fragment />;
      }
    
    canShowEditOption = (): boolean => {
        if(this.state.imgUrl !== this.props.imgUrl && this.props.onSave)
            return true;
        return false;
    }

    render(){
        return (
            <div className="editable_img_container" style={{height: this.props.heightInPx}}>
                <NormalImageComponent imgUrl={this.getImgUrl()} alternateText={this.props.alternateText}/>
                <ImageChooseComponent onChange={this.handleImageChange} isEnable={this.props.isEnable}/>
                {this.showEditOption()}
            </div>
        );
    };
}

export default EditableImageComponent;