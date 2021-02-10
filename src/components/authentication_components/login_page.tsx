import React from 'react';

import ErrorMessageContainer from '../error_components/errorMessageContainer_component';
import CustomTextInput from '../basic_components/input_components/custom_text_input';
import NormalButton from '../basic_components/button_components/normal_button_component';

import { Prompt } from 'react-router-dom';
import { ErrorMessageManager } from '../../classes/error_classes/ErrorMessageManager';
import { ErrorMessage } from '../../classes/error_classes/ErrorMessage';

interface Props {

}

interface State {
    email: string;
    password: string;
    isEnable: boolean;
    canShowPrompt: boolean;
    errorManager: ErrorMessageManager;
}

class LoginPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isEnable: true,
            canShowPrompt: false,
            errorManager: new ErrorMessageManager(),
        }
        this.isValidEmail.bind(this);
        this.isValidPassword.bind(this);
        this.canShowPrompt.bind(this);
        this.setEmail.bind(this);
        this.setPassword.bind(this);
        this.setLoginFormEnableStatus.bind(this);
        this.handleSubmit.bind(this);
        this.pushError.bind(this);
        this.hasErrors.bind(this);
        this.updateErrorList.bind(this);
    }

    componentWillUnmount() {
        this.state.errorManager.setCallBack(false);
    }

    isValidEmail = (email: string): boolean => {
        //TODO: verify email syntax
        return true;
    }

    isValidPassword = (password: string): boolean => {
        //TODO: verigy password syntax
        return true;
    }

    canShowPrompt = (email: string, password: string): boolean => {
        return email.length > 0 && password.length > 0;
    }

    setEmail = (newEmail: string): void => {
        this.setState({
            email: newEmail,
            canShowPrompt: this.canShowPrompt(newEmail, this.state.password)
        });
    }

    setPassword = (newPassword: string): void => {
        this.setState({
            password: newPassword,
            canShowPrompt: this.canShowPrompt(this.state.email, newPassword)
        });
    }

    setLoginFormEnableStatus = (isEnable: boolean): void => {
        this.setState({ isEnable: isEnable });
    }

    hasErrors = (): boolean => {
        let hasError: boolean = false;
        if (this.state.email.length <= 0) {
            this.pushError("Enter Email");
            hasError = true;
        } else if (!this.isValidEmail(this.state.email)) {
            this.pushError("Enter Valid Email");
            hasError = true;
        }
        if (this.state.password.length <= 0) {
            this.pushError("Enter Password");
            hasError = true;
        } else if (!this.isValidPassword(this.state.password)) {
            this.pushError("Enter Valid Password");
            hasError = true;
        }

        return hasError;
    }

    handleSubmit = (): void => {
        this.setLoginFormEnableStatus(false);
        if (this.hasErrors()) {
            this.setLoginFormEnableStatus(true);
        } else {
            //TODO: submit form
        }
    }

    pushError = (errorMessage: string): void => {
        this.state.errorManager.push(new ErrorMessage(errorMessage), this.updateErrorList);
        this.updateErrorList();
    }

    updateErrorList = (): void => {
        this.setState({ errorManager: this.state.errorManager });
    }

    render() {
        return (
            <div className="login_page_container">
                <Prompt message="Are you sure ?" when={this.state.canShowPrompt} />
                <form className="col-t-6" onSubmit={(e) => { e.preventDefault(); }}>
                    <h2>Log in</h2>
                    <CustomTextInput placeholder="Email" type="text" isEnable={this.state.isEnable}
                        onTextChange={this.setEmail} defaultValue={this.state.email} />
                    <CustomTextInput placeholder="Password" type="password" isEnable={this.state.isEnable}
                        onTextChange={this.setPassword} defaultValue={this.state.password} />
                    <NormalButton title="Submit" isEnable={this.state.isEnable} onClick={this.handleSubmit} />
                    <ErrorMessageContainer errors={this.state.errorManager.errors} />
                </form>
            </div>
        );
    }
}

export default LoginPage;