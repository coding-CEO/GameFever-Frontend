import React from 'react';

import CustomTextInput from '../basic_components/input_components/custom_text_input';
import NormalButton from '../basic_components/button_components/normal_button_component';

import { Prompt } from 'react-router-dom';
import { ErrorMessageManager } from '../../classes/error_classes/ErrorMessageManager';
import { ErrorMessage } from '../../classes/error_classes/ErrorMessage';
import ErrorMessageContainer from '../error_components/errorMessageContainer_component';

interface Props {

}

interface State {
    email: string;
    password: string;
    confirmPassword: string;
    isEnable: boolean;
    canShowPrompt: boolean;
    errorManager: ErrorMessageManager;
}

class SignUpPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            isEnable: true,
            canShowPrompt: false,
            errorManager: new ErrorMessageManager(),
        }
        this.isValidEmail.bind(this);
        this.isValidPassword.bind(this);
        this.isValidConfirmPassword.bind(this);
        this.canShowPrompt.bind(this);
        this.setEmail.bind(this);
        this.setPassword.bind(this);
        this.setConfirmPassword.bind(this);
        this.setLoginFormEnableStatus.bind(this);
        this.hasErrors.bind(this);
        this.handleSubmit.bind(this);
        this.pushError.bind(this);
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

    isValidConfirmPassword = (confirmPassword: string): boolean => {
        return this.state.password === confirmPassword;
    }

    canShowPrompt = (email: string, password: string, confirmPassword: string): boolean => {
        return email.length > 0 && password.length > 0 && confirmPassword.length > 0;
    }

    setEmail = (newEmail: string): void => {
        this.setState({
            email: newEmail,
            canShowPrompt: this.canShowPrompt(newEmail, this.state.password, this.state.confirmPassword)
        });
    }

    setPassword = (newPassword: string): void => {
        this.setState({
            password: newPassword,
            canShowPrompt: this.canShowPrompt(this.state.email, newPassword, this.state.confirmPassword)
        });
    }

    setConfirmPassword = (newConfirmPassword: string): void => {
        this.setState({
            confirmPassword: newConfirmPassword,
            canShowPrompt: this.canShowPrompt(this.state.email, this.state.password, newConfirmPassword)
        });
    }

    setLoginFormEnableStatus = (isEnable: boolean): void => {
        this.setState({ isEnable: isEnable });
    }

    hasErrors = (): boolean => {
        let hasError: boolean = false;

        if (this.state.email.length <= 0) {
            hasError = true;
            this.pushError("Enter Email");
        } else if (!this.isValidEmail(this.state.email)) {
            hasError = true;
            this.pushError("Enter Valid Email");
        }
        if (this.state.password.length <= 0) {
            hasError = true;
            this.pushError("Enter Password");
        } else if (!this.isValidPassword(this.state.password)) {
            hasError = true;
            this.pushError("Enter Valid Password");
        }
        if (this.state.confirmPassword.length <= 0) {
            hasError = true;
            this.pushError("Enter Confirm Password");
        } else if (!this.isValidConfirmPassword(this.state.confirmPassword)) {
            hasError = true;
            this.pushError("Enter Valid Confirm Password");
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
            <div className="signup_page_container">
                <Prompt message="Are you sure ?" when={this.state.canShowPrompt} />
                <form className="col-t-6" onSubmit={(e) => { e.preventDefault(); }}>
                    <h2>Sign Up</h2>
                    <CustomTextInput placeholder="Email" type="text" isEnable={this.state.isEnable}
                        onTextChange={this.setEmail} defaultValue={this.state.email} />
                    <CustomTextInput placeholder="Password" type="password" isEnable={this.state.isEnable}
                        onTextChange={this.setPassword} defaultValue={this.state.password} />
                    <CustomTextInput placeholder="Confirm Password" type="password"
                        isEnable={this.state.isEnable} onTextChange={this.setConfirmPassword}
                        defaultValue={this.state.confirmPassword} />
                    <NormalButton title="Submit" isEnable={this.state.isEnable} onClick={this.handleSubmit} />
                    <ErrorMessageContainer errors={this.state.errorManager.errors} />
                </form>
            </div>
        );
    }
}

export default SignUpPage;