import React from 'react';
import { Category } from '../../interfaces/Category';
import toggleIcon from '../../static/images/temp.png';
import Tab from './tab_component';

interface Props {
    categoryList: Category[];
}

interface State {
    isTabsOn: boolean;
}

//TODO: add isActive behaviour if possible
class NavigationBarTabs extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.handleToggleClick.bind(this);
        this.state = {
            isTabsOn: false,
        }
    }

    handleToggleClick = (): void => {
        this.setState({ isTabsOn: !this.state.isTabsOn });
    }

    render() {
        return (
            <div className="nav_tabs_container">
                <ul className={this.state.isTabsOn ? "" : "hideTabs"}>
                    {this.props.categoryList && this.props.categoryList.map((category: Category) => {
                        return <Tab category={category} key={category.title} />;
                    })}
                </ul>

                {/* TODO: add toggle burgur icon */}
                <img src={toggleIcon} alt="Toggle Menu" onClick={this.handleToggleClick} />
            </div>
        );
    }
}

export default NavigationBarTabs;