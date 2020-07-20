import React, { Component } from 'react'
import './style.scss'
import CompanyLogo from './CompanyLogo'
import CompanyImage from './CompanyImage'
import LoginForm from './LoginForm'

export default class Login extends Component {
    render() {
        return (
            <div className="container login-container">
                <div className="row">
                    <div className="col-md login-form-container">
                        <CompanyLogo />
                        <LoginForm />
                    </div>
                    <div className="col-md login-picture-container">
                        <CompanyImage />
                    </div>
                </div>
            </div>
        )
    }
}
