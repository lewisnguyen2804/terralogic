import React, { Component } from 'react'
import './style.scss'
import Avatar from '../../assets/images/img_avatar.png'
import ShowPasswordIcon from '../../assets/images/Suche03.svg';

import PageTitle from '../../components/PageTitle';
import UserCard from './UserCard';
import ProfileInput from './ProfileInput';
import Button from '../../components/Button';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false
        }
    }

    onShowPasswordClick = () => {
        this.setState({ showPassword: !this.state.showPassword })
    }

    render() {
        const passwordType = this.state.showPassword ? "text" : "password";

        return (
            <div>
                <PageTitle title="My Profile" description="Manage your profile and contact information." />

                <div className="container">
                    <UserCard image={Avatar} name="Lewis Nguyen" />

                    <div className="contact-information">
                        <div className="row">
                            <div className="col-md-6">
                                <ProfileInput inputType="text" inputTitle="Full Name" inputValue="Lewis Nguyen" inputName="fullname" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md">
                                <ProfileInput inputType="text" inputTitle="Email" inputValue="lewis.nguyen@terralogic.com" inputName="email" />
                            </div>
                            <div className="col-md">
                                <ProfileInput inputType="text" inputTitle="Phone" inputValue="+8412355458" inputName="phone" />
                            </div>
                        </div>
                    </div>
                    <hr className="hr-divide" />
                    <p className="change-pwd-label">Change password</p>

                    <div className="password-change">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label>Current password</label>
                                    <input type={passwordType} name="current-pwd" />
                                    <img
                                        src={ShowPasswordIcon}
                                        className="show-hide-pwd-icon"
                                        onClick={this.onShowPasswordClick} />  
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                <div className="input-group">
                                    <label>New password</label>
                                    <input type={passwordType} name="new-pwd" />
                                    <img
                                        src={ShowPasswordIcon}
                                        className="show-hide-pwd-icon"
                                        onClick={this.onShowPasswordClick} />
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="input-group">
                                    <label>Confirm password</label>
                                    <input type={passwordType} name="confirm-pwd" />
                                    <img
                                        src={ShowPasswordIcon}
                                        className="show-hide-pwd-icon"
                                        onClick={this.onShowPasswordClick} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="save-logout">
                        <Button buttonType="button" buttonClassName="button-type-1" buttonValue="Save" />
                        <Button buttonType="button" buttonClassName="button-type-2" buttonValue="Logout" />
                    </div>
                </div>
            </div>
        )
    }
}
