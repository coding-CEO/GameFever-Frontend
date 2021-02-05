import React from 'react';
var classNames = require('classnames');

interface Props {
    title: string;
    onClick: Function;
    isEnable: boolean;
}

class NormalButton extends React.Component<Props, any> {

    constructor(props: Props){
        super(props);
        this.handleClick.bind(this);
        this.getClassName.bind(this);
    }
    
    handleClick = () => {
        this.props.onClick();
    }

    getClassName = (): string => {
        let inputClassNames = classNames({
            'disable': !this.props.isEnable,
        })
        return inputClassNames;
    }

    render(){
        return(
            <button onClick={this.handleClick} className={this.getClassName()}>{this.props.title}</button>
        );
    }
}

export default NormalButton;