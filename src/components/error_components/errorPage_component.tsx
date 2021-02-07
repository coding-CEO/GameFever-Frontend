import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
}

interface State {
}

class ErrorPage extends React.Component<Props, State> {

    render() {
        // console.log(this.props.location.state);
        return (
            <div className="error_page_container">
                <h3>404 Page not Found</h3>
            </div>
        );
    };
}

export default ErrorPage;