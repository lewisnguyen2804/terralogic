import React, { Component } from 'react'
import './style.scss'
import CompanyLogo from '../../components/CompanyLogo'
import CompanyImage from '../../components/CompanyImage'
import LoginForm from './LoginForm'

export default class LoginNoRWD extends Component {
    render() {
        return (
            <div>
                <div className="login-page-container">
                    <div className="left-part">
                        <CompanyLogo />
                        <LoginForm />
                    </div>
                        
                    <div className="right-part">
                        <CompanyImage />
                    </div>
                </div>
            </div>
        )
    }
}
