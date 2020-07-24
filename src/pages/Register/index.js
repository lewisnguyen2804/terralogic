import React, { Component } from 'react'
import CompanyLogo from '../../components/CompanyLogo'
import CompanyImage from '../../components/CompanyImage'
import RegisterForm from './RegisterForm'

export default class Register extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid p-lg-5">
                    <div className="row">
                        <div className="col-sm-12 col-lg">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-1 col-md-2"></div>
                                    <div className="col-sm col-md">
                                        <CompanyLogo />
                                        <RegisterForm />
                                    </div>
                                    <div className="col-sm-1 col-md-2">
                                        {/* Empty col */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-0 col-lg d-none d-lg-block align-self-center">
                            <CompanyImage />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
