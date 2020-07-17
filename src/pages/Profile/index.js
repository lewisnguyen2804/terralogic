import React, { Component } from 'react'
import './style.scss'
import Avatar from '../../assets/images/img_avatar.png';

export default class Profile extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container-fluid header p-4">
                    <div className="container header-text">
                        <h1>My Profile</h1>
                        <p>Manage your profile and contact information.</p>
                    </div>
                </div>

                <div className="container">
                    <div className="name-avatar">
                        <img className="avatar-pic" src={Avatar} />
                        <h1>Lewis Nguyen</h1>
                    </div>

                    <div className="contact-information">
                        <div className="row">
                            <div className="col-6">
                                <div className="input-group">
                                    <label>Full name</label>
                                    <input type="text" value="Lewis Nguyen"></input>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="input-group">
                                    <label>Email</label>
                                    <input type="text" value="lewis.nguyen@terralogic.com"></input>
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group">
                                    <label>Phone</label>
                                    <input type="text"  value="8412345678"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p class="change-pwd-label">Change password</p>

                    <div className="password-change">
                        <div className="row">
                            <div className="col-6">
                                <div className="input-group">
                                    <label>Current password</label>
                                    <input type="text"></input>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="input-group">
                                    <label>New password</label>
                                    <input type="text"></input>
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group">
                                    <label>Confirm password</label>
                                    <input type="text"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
