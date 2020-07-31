/*eslint-disable */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';

import EmailIcon from '../../assets/images/Suche.svg'
import PasswordIcon from '../../assets/images/Suche02.svg'
import ShowPasswordIcon from '../../assets/images/Suche03.svg'

import CustomButton from '../../components/CustomButton'
import RoundedInput from '../../components/RoundedInput'

import { connect } from 'react-redux';
import { userActions } from '../../actions';

import { withRouter } from 'react-router-dom';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
                name: '',
                phone: '',
                confirmPassword: '',
            },
            showPassword: false,
            showConfirmPassword: false,
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
        // START TO REGISTER
        try {
            this.props.register(this.state.user);
        } catch (e) {
            //
        }
    }

    // SHOW/HIDE PASSWORD
    onShowPasswordClick = () => {
        this.setState({ showPassword: !this.state.showPassword })
    }

    onShowConfirmPasswordClick = () => {
        this.setState({ showConfirmPassword: !this.state.showConfirmPassword })
    }

    // GO BACK BUTTON
    goBack = () => {
        this.props.history.goBack()
    }

    render() {
        let showPasswordIconClassName = this.state.showPassword ? "show-password-icon" : "hide-password-icon";
        let passwordType = this.state.showPassword ? "text" : "password";

        let showConfirmPasswordIconClassName = this.state.showConfirmPassword ? "show-password-icon" : "hide-password-icon";
        let confirmPasswordType = this.state.showConfirmPassword ? "text" : "password";

        return (
            <div className="login-form">
                <h2 className="form-title">Register Your Account</h2>

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

                    <RoundedInput
                        isPassword="true"
                        title="Confirm Password"
                        icon={PasswordIcon}
                        type={confirmPasswordType}
                        value={this.state.user.confirmPassword}
                        placeholder="Enter your password"
                        name="confirmPassword"
                        handleChange={this.handleChange}
                        showPwdClassName={showConfirmPasswordIconClassName}
                        showPwdOnClick={this.onShowConfirmPasswordClick}
                        showPwdIcon={ShowPasswordIcon}
                    />

                    <RoundedInput
                        title="Full Name"
                        icon={EmailIcon}
                        type="text"
                        value={this.state.user.name}
                        placeholder="Enter your full name"
                        name="name"
                        handleChange={this.handleChange}
                    />

                    <RoundedInput
                        title="Phone Number"
                        icon={EmailIcon}
                        type="text"
                        value={this.state.user.phone}
                        placeholder="Enter your phone number"
                        name="phone"
                        handleChange={this.handleChange}
                    />

                    <div className="back-register-buttons">
                        <CustomButton
                            type="button"
                            className="button-type-2"
                            onClick={this.goBack}
                            value="Back" />
                        {this.props.registering &&
                            <CustomButton
                                type="submit"
                                className="button-type-1"
                                value="Submiting..." />
                        }
                        {!this.props.registering &&
                            <CustomButton
                                type="submit"
                                className="button-type-1"
                                value="Submit" />}
                    </div>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { registering } = state.registration;
    return { registering };
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        register: userActions.register
    }, dispatch)
}

export { RegisterForm };
const RegisterFormContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterForm));
export default RegisterFormContainer;