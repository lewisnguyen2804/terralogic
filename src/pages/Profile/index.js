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
                <div className="container content">
                    <div className="row">
                        {/* SIDEBAR */}
                        <div className="col-sm-4 col-md-4 col-lg-3">
                            <ul className="nav flex-column nav-pills sidebar">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">My Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Settings</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Others</a>
                                </li>
                            </ul>
                        </div>
                        {/* CONTENT */}
                        <div className="col-sm-8 col-md-8">
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
                    </div>
                </div>
            </div>
        )
    }
}
