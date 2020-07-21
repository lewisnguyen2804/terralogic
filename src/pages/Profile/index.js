import React, { Component } from 'react'
import './style.scss'
import Avatar from '../../assets/images/img_avatar.png'
import ShowPasswordIcon from '../../assets/images/Suche03.svg';

import PageTitle from '../../components/PageTitle';
import UserCard from './UserCard';
import SquaredInput from '../../components/SquaredInput';
import CustomButton from '../../components/CustomButton';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            fullName: 'Lewis Nguyen',
            email: 'lewisnguyen@terralogic.com',
            phone: '+8412323513',
            currentPwd: '123456',
            newPwd: '12345678',
            confirmPwd: '12345678'
        }
    }

    // HANDLE INPUTS
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    // SHOW/HIDE PASSWORD
    onShowPasswordClick = () => {
        this.setState({ showPassword: !this.state.showPassword })
    }

    render() {
        const passwordType = this.state.showPassword ? "text" : "password";
        return (
            <div>
                <PageTitle
                    title="My Profile"
                    description="Manage your profile and contact information." />

                <div className="container">
                    <UserCard
                        image={Avatar}
                        name={this.state.fullName} />

                    <div className="contact-information">
                        <div className="row">
                            <div className="col-md-6">
                                <SquaredInput
                                    type="text"
                                    title="Full Name"
                                    value={this.state.fullName}
                                    name="fullName"
                                    handleChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md">
                                <SquaredInput
                                    type="text"
                                    title="Email"
                                    value={this.state.email}
                                    name="email"
                                    handleChange={this.handleChange}
                                />
                            </div>
                            <div className="col-md">
                                <SquaredInput
                                    type="text"
                                    title="Phone"
                                    value={this.state.phone}
                                    name="phone"
                                    handleChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p className="change-pwd-label">Change password</p>

                    <div className="password-change">
                        <div className="row">
                            <div className="col-md-6">
                                <SquaredInput
                                    isPassword="true"
                                    type={passwordType}
                                    title="Current password"
                                    name="currentPwd"
                                    value={this.state.currentPwd}
                                    imgSrc={ShowPasswordIcon}
                                    imgAlt="pwd-icon"
                                    imgClassName="show-hide-pwd-icon"
                                    onShowPasswordClick={this.onShowPasswordClick}
                                    handleChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md">
                                <SquaredInput
                                    isPassword="true"
                                    type={passwordType}
                                    title="New password"
                                    name="newPwd"
                                    value={this.state.newPwd}
                                    imgSrc={ShowPasswordIcon}
                                    imgAlt="pwd-icon"
                                    imgClassName="show-hide-pwd-icon"
                                    onShowPasswordClick={this.onShowPasswordClick}
                                    handleChange={this.handleChange}
                                />
                            </div>
                            <div className="col-md">
                                <SquaredInput
                                    isPassword="true"
                                    type={passwordType}
                                    title="Confirm password"
                                    name="confirmPwd"
                                    value={this.state.confirmPwd}
                                    imgSrc={ShowPasswordIcon}
                                    imgAlt="pwd-icon"
                                    imgClassName="show-hide-pwd-icon"
                                    onShowPasswordClick={this.onShowPasswordClick}
                                    handleChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="save-logout">
                        <CustomButton
                            type="button"
                            className="button-type-1"
                            value="Save" />
                        <CustomButton
                            type="button"
                            className="button-type-2"
                            value="Logout" />
                    </div>
                </div>
            </div>
        )
    }
}
