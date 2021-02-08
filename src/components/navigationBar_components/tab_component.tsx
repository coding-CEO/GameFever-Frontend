import React from 'react';
import { Category } from '../../interfaces/Category';
import { RouteComponentProps } from 'react-router-dom';
import { Route } from '../../utils/Route';

interface Props extends RouteComponentProps {
    category: Category;
}

class Tab extends React.Component<Props, any> {

    constructor(props: Props) {
        super(props);
        this.handleTabClick.bind(this);
    }

    handleTabClick = (): void => {
        let route: string = `/category/${this.props.category.title}`;
        Route.goToRoute(route, this.props.history);
    }

    render() {
        return (
            <li onClick={this.handleTabClick}>{this.props.category.title}</li>
        );
    }
}

export default Tab;