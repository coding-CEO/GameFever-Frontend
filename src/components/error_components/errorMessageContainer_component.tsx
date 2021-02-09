import React from 'react';

import { ErrorMessage } from '../../classes/error_classes/ErrorMessage';
import ErrorMessageComponent from './errorMessage_component';

interface Props {
    errors: ErrorMessage[],
}

class ErrorMessageContainer extends React.Component<Props, any> {

    render() {
        return (
            <div className="error_message_main_container">
                {this.props.errors.length > 0 && this.props.errors.map((error) => {
                    //TODO: make key unique
                    return <ErrorMessageComponent key={error.message}
                        message={error.message} />
                })}
            </div>
        );
    };
}

export default ErrorMessageContainer;