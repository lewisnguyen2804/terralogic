import React, { Component } from 'react'
import './style.scss'
import CompanyLogo from './CompanyLogo'
import CompanyImage from './CompanyImage'
import LoginForm from './LoginForm'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="container mt-md-5 mb-5">
                    <div className="row">
                        <div className="col-sm-12 col-md">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-11">
                                        <CompanyLogo />
                                        <LoginForm />
                                    </div>
                                    <div className="col-md-1 d-none d-md-block">
                                        {/* Empty col */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-0 col-md d-none d-md-block pl-5 align-self-center">
                            <CompanyImage />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
