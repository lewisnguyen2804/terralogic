import React, { Component } from 'react'
import './style.scss';
import EmailIcon from '../../../assets/images/Suche.svg';
import PasswordIcon from '../../../assets/images/Suche02.svg';
import ShowPasswordIcon from '../../../assets/images/Suche03.svg';
import Button from '../../../components/Button';

export default class LoginForm extends Component {
    render() {
        return (
            <div class="login-form">
                <h2 className="form-title">Login Your Account</h2>    
                <form>
                    <div className="input-container">
                        <p class="input-title">Email</p>
                        <div class="input-with-icon">
                            <img className="input-icon" src={EmailIcon} />
                            <input className="input-text" type="text" placeholder="Enter your email" name="email" />
                        </div>
                    </div>

                    <div className="input-container">
                        <p class="input-title">Password</p>
                        <div class="input-with-icon">
                            <img className="input-icon" src={PasswordIcon} />
                            <input className="input-text" type="password" placeholder="Enter your password" name="password" />
                            <img className="show-password-icon" src={ShowPasswordIcon} />
                        </div>
                    </div>

                    <div className="register-login-buttons">
                        <Button buttonType="button" buttonClassName="button-type-2" buttonValue="Register" />
                        <div className="space" />
                        <Button buttonType="submit" buttonClassName="button-type-1" buttonValue="Login" />
                    </div>

                    <div className="remember-login">
                        <input type="checkbox" name="remember-pwd" />
                        Remember password
                    </div>
                </form>
            </div>
        )
    }
}
