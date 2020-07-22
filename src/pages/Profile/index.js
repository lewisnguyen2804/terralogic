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
            fullName: 'Lewis Nguyen',
            email: 'lewisnguyen@terralogic.com',
            phone: '+8412323513',
            currentPwd: '123456',
            newPwd: '12345678',
            confirmPwd: '12345678',
            showCurrentPwd: false,
            showNewPwd: false,
            showConfirmPwd: false
        }
    }

    // HANDLE INPUTS
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    // SHOW/HIDE PASSWORD
    onShowCurrentPasswordClick = () => {
        this.setState({ showCurrentPwd: !this.state.showCurrentPwd })
    }

    onShowNewPasswordClick = () => {
        this.setState({ showNewPwd: !this.state.showNewPwd })
    }

    onShowConfirmPasswordClick = () => {
        this.setState({ showConfirmPwd: !this.state.showConfirmPwd })
    }

    render() {
        const currentPasswordType = this.state.showCurrentPwd ? "text" : "password";
        const newPasswordType = this.state.showNewPwd ? "text" : "password";
        const confirmPasswordType = this.state.showConfirmPwd ? "text" : "password";

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
                                    type={currentPasswordType}
                                    title="Current password"
                                    name="currentPwd"
                                    value={this.state.currentPwd}
                                    imgSrc={ShowPasswordIcon}
                                    imgAlt="pwd-icon"
                                    imgClassName="show-hide-pwd-icon"
                                    onShowPasswordClick={this.onShowCurrentPasswordClick}
                                    handleChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md">
                                <SquaredInput
                                    isPassword="true"
                                    type={newPasswordType}
                                    title="New password"
                                    name="newPwd"
                                    value={this.state.newPwd}
                                    imgSrc={ShowPasswordIcon}
                                    imgAlt="pwd-icon"
                                    imgClassName="show-hide-pwd-icon"
                                    onShowPasswordClick={this.onShowNewPasswordClick}
                                    handleChange={this.handleChange}
                                />
                            </div>
                            <div className="col-md">
                                <SquaredInput
                                    isPassword="true"
                                    type={confirmPasswordType}
                                    title="Confirm password"
                                    name="confirmPwd"
                                    value={this.state.confirmPwd}
                                    imgSrc={ShowPasswordIcon}
                                    imgAlt="pwd-icon"
                                    imgClassName="show-hide-pwd-icon"
                                    onShowPasswordClick={this.onShowConfirmPasswordClick}
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
