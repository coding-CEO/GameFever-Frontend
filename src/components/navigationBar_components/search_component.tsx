import React from 'react';

import NormalTextInput from '../basic_components/input_components/text_input';
import NormalButton from '../basic_components/button_components/normal_button_component';

interface Props {

}

interface State {

}

class MainSearch extends React.Component<Props, State> {

    debugClick = () => {
        //TODO: temperary
    }

    render() {
        return (
            <div className="main_search_container">
                <NormalTextInput placeholder="Search Something..." />
                <NormalButton title="Search" onClick={this.debugClick} isEnable={true} />
            </div>
        );
    }
}

export default MainSearch;