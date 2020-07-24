/*eslint-disable */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';

import EmailIcon from '../../../assets/images/Suche.svg'
import PasswordIcon from '../../../assets/images/Suche02.svg'
import ShowPasswordIcon from '../../../assets/images/Suche03.svg'

import CustomButton from '../../../components/CustomButton'
import RoundedInput from '../../../components/RoundedInput'
import CustomCheckBox from '../../../components/CustomCheckBox'

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { userActions } from '../../../actions';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''
            },
            isError: false,
            errorMsg: '',
            showPassword: false,
            rememberPassword: false
        }
    }

    // HANDLE INPUTS
    handleChange = (event) => {
        const { name, value } = event.target;
        const { user } = this.state;

        this.setState({
            user: {
                ...user,
                [name]: value
            }
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
        if (this.state.user.email === '' && this.state.user.password === '') {
            errorMsg = 'Please type your email and password to login';
            isError = true;
        }
        else if (this.state.user.email === '' && this.state.user.password !== '') {
            errorMsg = 'Please type your email';
            isError = true;
        }
        else if (this.state.user.email !== '' && this.state.user.password === '') {
            errorMsg = 'Please type your password';
            isError = true;
        }
        else if (!this.validate(this.state.user.email)) {
            errorMsg = `"${this.state.email}" is not an email`;
            isError = true;
        }
        // else if (this.state.user.password.length < 6) {
        //     errorMsg = 'Password must be at least 6 characters';
        //     isError = true;
        // }
        else {
            errorMsg = '';
            isError = false;

            // START TO LOGIN
            this.props.login(this.state.user);
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

    render() {
        let showPasswordIconClassName = this.state.showPassword ? "show-password-icon" : "hide-password-icon";
        let passwordType = this.state.showPassword ? "text" : "password";
        return (
            <div className="login-form">
                <h2 className="form-title">Login Your Account</h2>

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
                        value={this.state.user.email}
                        placeholder="Enter your email"
                        name="email"
                        handleChange={this.handleChange}
                    />

                    <RoundedInput
                        isPassword="true"
                        title="Password"
                        icon={PasswordIcon}
                        type={passwordType}
                        value={this.state.user.password}
                        placeholder="Enter your password"
                        name="password"
                        handleChange={this.handleChange}
                        showPwdClassName={showPasswordIconClassName}
                        showPwdOnClick={this.onShowPasswordClick}
                        showPwdIcon={ShowPasswordIcon}
                    />

                    <div className="register-login-buttons">
                        <Link to="/register">
                            <CustomButton
                                type="button"
                                className="button-type-2"
                                value="Register" />
                        </Link>
                        <CustomButton
                            type="submit"
                            className="button-type-1"
                            value="Login" />
                    </div>

                    <CustomCheckBox
                        label="Remember password"
                        name="remember-pwd"
                        onChange={this.rememberPasswordOnChange}
                    />
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login: userActions.login
    }, dispatch)
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
export default LoginFormContainer;