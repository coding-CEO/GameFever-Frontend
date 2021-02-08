import React from 'react';

import CustomTextInput from '../basic_components/input_components/custom_text_input';
import NormalButton from '../basic_components/button_components/normal_button_component';

import { Prompt } from 'react-router-dom';

interface Props {

}

interface State {
    email: string;
    password: string;
    confirmPassword: string;
    isEnable: boolean;
    canShowPrompt: boolean;
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
        }
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

    handleSubmit = (): void => {
        this.setLoginFormEnableStatus(false);
        if (this.state.email.length <= 0 || !this.isValidEmail(this.state.email)) {
            this.setLoginFormEnableStatus(true);
            //TODO: show error "enter email"
            alert("enter email");
        }
        if (this.state.password.length <= 0 || !this.isValidPassword(this.state.password)) {
            this.setLoginFormEnableStatus(true);
            //TODO: show error "enter password"
            alert("enter password");
        }
        if (this.state.confirmPassword.length <= 0 || !this.isValidConfirmPassword(this.state.confirmPassword)) {
            this.setLoginFormEnableStatus(true);
            //TODO: show error "enter password"
            alert("enter confirm password");
        }
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
                </form>
            </div>
        );
    }
}

export default SignUpPage;