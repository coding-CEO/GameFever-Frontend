import React from 'react';

interface Props {
    message: string;
}

interface State {
    isVisible: boolean;
}

class ErrorMessage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            isVisible: true,
        }
    }

    renderError = (): void => {
        setTimeout(() => {
            this.setState({ isVisible: false });
        }, 5000); //TODO: change the default time if you want.
    }

    render() {
        return (
            (this.state.isVisible &&
                (
                    this.renderError(),
                    <div className="error_message_container">
                        <h3>{this.props.message}</h3>
                    </div>
                )
            )
        );
    };
}

export default ErrorMessage;