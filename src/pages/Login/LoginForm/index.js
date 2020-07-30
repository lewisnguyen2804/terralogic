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


    // SUBMIT FORM
    handleSubmit = async (event) => {
        event.preventDefault();
        // START TO LOGIN
        this.props.login(this.state.user);
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
                        {this.props.loggingIn &&
                            <CustomButton
                                type="submit"
                                className="button-type-1"
                                value="Logging in..." />
                        }
                        {!this.props.loggingIn &&
                            <CustomButton
                                type="submit"
                                className="button-type-1"
                                value="Login" />}

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

const mapStateToProps = (state) => {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        login: userActions.login
    }, dispatch)
}

export { LoginForm };
const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
export default LoginFormContainer;