import React, { Component } from 'react'
import './style.scss'
import CompanyLogo from './CompanyLogo'
import CompanyImage from './CompanyImage'
import LoginForm from './LoginForm'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="container login-container p-5">
                    <div className="row align-items-center">
                        <div className="col-md login-form-container">
                            <CompanyLogo />
                            <LoginForm />
                        </div>
                        <div></div>
                    </div>
                </div>
                <div class="container-fluid abs">
                    <div class="row align-items-center">
                        <div class="col-md"></div>
                        <div class="col-md login-picture-container d-none d-lg-block">
                            <CompanyImage />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
