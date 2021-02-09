import React from 'react';

interface Props {
    message: string;
}

class ErrorMessage extends React.Component<Props, any> {

    render() {
        return (
            <div className="error_message_container">
                <h3>{this.props.message}</h3>
            </div>
        );
    };
}

export default ErrorMessage;