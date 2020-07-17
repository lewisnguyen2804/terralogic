import React, { Component } from 'react'
import './style.scss'
import Avatar from '../../assets/images/img_avatar.png'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: true
        }
    }

    onShowPasswordClick = () => {
        this.setState({showPassword: !this.state.showPassword})
    }

    render() {
        const showPasswordIcon = this.state.showPassword ? "fa fa-eye show-hide-pwd-icon":"fa fa-eye-slash show-hide-pwd-icon";
        const passwordType = this.state.showPassword ? "password" : "text";

        return (
            <div>
                <div className="container-fluid header">
                    <div className="container header-text">
                        <h2>My Profile</h2>
                        <p>Manage your profile and contact information.</p>
                    </div>
                </div>

                <div className="container">
                    <div className="name-avatar">
                        <img className="user-avatar" src={Avatar} />
                        <h2 className="user-name">Lewis Nguyen</h2>
                    </div>

                    <div className="contact-information">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label>Full name</label>
                                    <input type="text" value="Lewis Nguyen" name="full-name" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md">
                                <div className="input-group">
                                    <label>Email</label>
                                    <input type="text" value="lewis.nguyen@terralogic.com" name="email" />
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="input-group">
                                    <label>Phone</label>
                                    <input type="text" value="8412345678" name="phone" />
                                </div>
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
                                    <i 
                                        className={showPasswordIcon}
                                        onClick={this.onShowPasswordClick}></i>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                <div className="input-group">
                                    <label>New password</label>
                                    <input type={passwordType} name="new-pwd" />
                                    <i 
                                        className={showPasswordIcon}
                                        onClick={this.onShowPasswordClick}></i>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="input-group">
                                    <label>Confirm password</label>
                                    <input type={passwordType} name="confirm-pwd" />
                                    <i 
                                        className={showPasswordIcon}
                                        onClick={this.onShowPasswordClick}></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="save-logout">
                        <input type="button" className="save-button" value="Save" />
                        <input type="button" className="logout-button" value="Logout" />
                    </div>
                </div>
            </div>
        )
    }
}
