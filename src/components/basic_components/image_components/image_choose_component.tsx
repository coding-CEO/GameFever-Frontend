import React from 'react';
import add_image_icon from '../../../static/images/add_image_icon.svg';
var classNames = require('classnames');

interface Props {
    isEnable: boolean;
    onChange(input: React.ChangeEvent<HTMLInputElement>): void;
}

class ImageChooseComponent extends React.Component<Props, any> {

    constructor(props: Props) {
        super(props);
        this.getFileChooseButtonClassName.bind(this);
    }

    getFileChooseButtonClassName = (): string => {
        let inputFileClassNames = classNames({
            'disable': !this.props.isEnable,
        });

        return inputFileClassNames;
    }

    render() {
        return (
            <div className="image_choose_container row-nomargin">
                <input id="img_chooser" className="col-12" type="file" accept="image/*"
                    onChange={(input) => this.props.onChange(input)} />
                <div className="input_file_label_container col-12">
                    <label className={this.getFileChooseButtonClassName()}
                        htmlFor="img_chooser">
                        <img src={add_image_icon} alt="" />
                            Choose Image
                    </label>
                </div>
            </div>
        );
    };
}

export default ImageChooseComponent;