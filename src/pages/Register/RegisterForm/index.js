import React, { Component } from 'react'

import './style.scss'

import EmailIcon from '../../../assets/images/Suche.svg'
import PasswordIcon from '../../../assets/images/Suche02.svg'
import ShowPasswordIcon from '../../../assets/images/Suche03.svg'

import CustomButton from '../../../components/CustomButton'
import RoundedInput from '../../../components/RoundedInput'

import { withRouter } from 'react-router-dom';
import Register from '..'

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            fullName: '',
            phoneNumber: '',
            isError: false,
            errorMsg: '',
            showPassword: false,
            rememberPassword: false
        }
    }

    // HANDLE INPUTS
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    // VALIDATE EMAIL
    validate = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return expression.test(String(email).toLowerCase())
    }

    // SUBMIT FORM
    handleSubmit = async (event) => {
        event.preventDefault();
        let errorMsg = '';
        let isError = false;
        if (this.state.email === '' && this.state.password === '') {
            errorMsg = 'Please type your email and password to login';
            isError = true;
        }
        else if (this.state.email === '' && this.state.password !== '') {
            errorMsg = 'Please type your email';
            isError = true;
        }
        else if (this.state.email !== '' && this.state.password === '') {
            errorMsg = 'Please type your password';
            isError = true;
        }
        else if (!this.validate(this.state.email)) {
            errorMsg = `"${this.state.email}" is not an email`;
            isError = true;
        }
        else if (this.state.password.length < 6) {
            errorMsg = 'Password must be at least 6 characters';
            isError = true;
        }
        else {
            errorMsg = '';
            isError = false;
        }
        this.setState({ error: errorMsg, isError: isError });
    }

    // SHOW/HIDE PASSWORD
    onShowPasswordClick = () => {
        this.setState({ showPassword: !this.state.showPassword });
    }

    // REMEMBER PASSWORD
    rememberPasswordOnChange = () => {
        this.setState({ rememberPassword: !this.state.rememberPassword })
    }

    // GO BACK BUTTON
    goBack = () => {
        this.props.history.goBack()
    }

    render() {
        let showPasswordIconClassName = this.state.showPassword ? "show-password-icon" : "hide-password-icon";
        let passwordType = this.state.showPassword ? "text" : "password";
        return (
            <div className="login-form">
                <h2 className="form-title">Register Your Account</h2>

                {/* ERROR MESSAGE */}
                {this.state.isError ?
                    <div className="alert alert-danger alert-dismissible">
                        <strong>{this.state.error}</strong>
                    </div> : <div></div>
                }

                <form className="form-main" onSubmit={this.handleSubmit}>
                    <RoundedInput
                        title="Email"
                        icon={EmailIcon}
                        type="text"
                        value={this.state.email}
                        placeholder="Enter your email"
                        name="email"
                        handleChange={this.handleChange}
                    />

                    <RoundedInput
                        isPassword="true"
                        title="Password"
                        icon={PasswordIcon}
                        type={passwordType}
                        value={this.state.password}
                        placeholder="Enter your password"
                        name="password"
                        handleChange={this.handleChange}
                        showPwdClassName={showPasswordIconClassName}
                        showPwdOnClick={this.onShowPasswordClick}
                        showPwdIcon={ShowPasswordIcon}
                    />

                    <RoundedInput
                        isPassword="true"
                        title="Confirm Password"
                        icon={PasswordIcon}
                        type={passwordType}
                        value={this.state.confirmPassword}
                        placeholder="Enter your password"
                        name="confirmPassword"
                        handleChange={this.handleChange}
                        showPwdClassName={showPasswordIconClassName}
                        showPwdOnClick={this.onShowPasswordClick}
                        showPwdIcon={ShowPasswordIcon}
                    />

                    <RoundedInput
                        title="Full Name"
                        icon={EmailIcon}
                        type="text"
                        value={this.state.fullName}
                        placeholder="Enter your full name"
                        name="fullName"
                        handleChange={this.handleChange}
                    />

                    <RoundedInput
                        title="Phone Number"
                        icon={EmailIcon}
                        type="text"
                        value={this.state.phoneNumber}
                        placeholder="Enter your phone number"
                        name="phoneNumber"
                        handleChange={this.handleChange}
                    />

                    <div className="back-register-buttons">
                        <CustomButton
                            type="button"
                            className="button-type-2"
                            onClick={this.goBack}
                            value="Back" />
                        <CustomButton
                            type="submit"
                            className="button-type-1"
                            value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(RegisterForm);