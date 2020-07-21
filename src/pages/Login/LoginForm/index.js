import React, { Component } from 'react'
import './style.scss';
import EmailIcon from '../../../assets/images/Suche.svg';
import PasswordIcon from '../../../assets/images/Suche02.svg';
import ShowPasswordIcon from '../../../assets/images/Suche03.svg';
import Button from '../../../components/Button';
import RoundedInput from '../../../components/RoundedInput';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isError: false,
            errorMsg: '',
            showPassword: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    // validate email
    validate = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        return expression.test(String(email).toLowerCase())
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        let errorMsg = '';
        let isError = false;
        if (this.state.email === '' && this.state.password === '') {
            errorMsg = 'Please fill the inputs';
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


    onShowPasswordClick = () => {
        console.log('click');
        this.setState({ showPassword: !this.state.showPassword });
    }

    render() {
        let showPasswordIconClassName = this.state.showPassword ? "show-password-icon" : "hide-password-icon";
        let passwordType = this.state.showPassword ? "text" : "password";
        return (
            <div className="login-form">
                <h2 className="form-title">Login Your Account</h2>
                <form className="form-main" onSubmit={this.handleSubmit}>
                    <RoundedInput
                        title="Email"
                        icon={EmailIcon}
                        type="text"
                        placeholder="Enter your email"
                        name="email"
                        handleChange={this.handleChange}
                    />

                    <RoundedInput
                        isPassword="true"
                        title="Password"
                        icon={PasswordIcon}
                        type={passwordType}
                        placeholder="Enter your password"
                        name="password"
                        handleChange={this.handleChange}
                        showPwdClassName={showPasswordIconClassName}
                        showPwdOnClick={this.onShowPasswordClick}
                        showPwdIcon={ShowPasswordIcon}
                    />

                    <div className="register-login-buttons">
                        <Button buttonType="button" buttonClassName="button-type-2" buttonValue="Register" />
                        <Button buttonType="submit" buttonClassName="button-type-1" buttonValue="Login" />
                    </div>

                    <label className="remember-login-container">
                        <input type="checkbox" name="remember-pwd" />
                        Remember password
                        <span class="checkmark"></span>
                    </label>
                </form>

                {/* ERROR MESSAGE */}
                {this.state.isError ?
                    <div className="alert alert-danger alert-dismissible">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>{this.state.error}</strong>
                    </div> : <div></div>
                }
            </div>
        )
    }
}
