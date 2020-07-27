import React, { Component } from 'react'
import { bindActionCreators } from 'redux';

import Avatar from '../../assets/images/img_avatar.png'
import ShowPasswordIcon from '../../assets/images/Suche03.svg';

import PageTitle from '../../components/PageTitle';
import UserCard from './UserCard';
import SquaredInput from '../../components/SquaredInput';
import CustomButton from '../../components/CustomButton';

import { connect } from 'react-redux';
import { userActions } from '../../actions';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            phone: '',
            currentPwd: '',
            newPwd: '',
            confirmPwd: '',
            showCurrentPwd: false,
            showNewPwd: false,
            showConfirmPwd: false,

            isUpdatingInformation: false,
            isChangingPassword: false
        }
    }

    // UPLOAD FILES/IMAGES
    handleUploadClick = (event) => {
        this.refs.fileUploader.click();
    }

    onFileChange = (event) => {
        this.uploadFile(event.target.files[0])
    };

    uploadFile = (selectedFile) => {
        const formData = new FormData();
        formData.append('image', selectedFile, selectedFile.name);
        this.props.uploadImage(formData, this.props.user.token)
    }

    // EDIT PROFILE
    editProfile = () => {
        if (this.state.isUpdatingInformation === true) {
            this.updateInformation();
        }
        if (this.state.isChangingPassword === true) {
            this.changePassword();
        }
    }

    // UPDATE INFORMATION
    updateInformation = () => {
        const data = {
            name: this.state.fullName,
            email: this.state.email,
            phone: this.state.phone
        }
        this.props.updateInformation(data, this.props.user.token)
    }

    // CHANGE PASSWORD
    changePassword = () => {
        const data = {
            "password": this.state.newPwd,
            "currentPassword": this.state.currentPwd
        }
        this.props.changePassword(data, this.props.user.token)
    }

    componentDidMount = () => {
        try {
            this.setState({
                fullName: this.props.userLogged.name,
                email: this.props.userLogged.email,
                phone: this.props.userLogged.phone,
            })
        } catch (e) {
            console.log("error get profile: " + e);
        }
    }

    // HANDLE INPUTS
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
        let isUpdatingInformation = false;
        let isChangingPassword = false;

        // CHECK IF USER IS UPDATING PROFILE
        if ((this.state.fullName !== this.props.userLogged.name)
            || (this.state.email !== this.props.userLogged.email)
            || (this.state.phone !== this.props.userLogged.phone)) {
                isUpdatingInformation = true
        }
        else {
            isUpdatingInformation = false
        }
        if ((this.state.currentPwd !== '')
            || (this.state.newPwd !== '')
            || (this.state.confirmPwd !== '')) {
                isChangingPassword = true
        }
        else {
            isChangingPassword = false
        }

        this.setState({ isChangingPassword, isUpdatingInformation })
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

    // LOGOUT
    onLogOutClick = () => {
        this.props.logout();
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
                        name={this.state.fullName}
                        handleClick={this.handleUploadClick}
                    />

                    {/* UPLOAD IMAGE */}
                    <input
                        type="file"
                        ref="fileUploader"
                        onChange={this.onFileChange}
                        style={{ display: "none" }} />

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
                            onClick={this.editProfile}
                            value="Save" />
                        <CustomButton
                            type="button"
                            className="button-type-2"
                            onClick={this.onLogOutClick}
                            value="Logout" />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { logged, authentication } = state;
    const { userLogged } = logged;
    const { user } = authentication;

    return { userLogged, user };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logout: userActions.logout,
        uploadImage: userActions.uploadImage,
        updateInformation: userActions.updateInformation,
        changePassword: userActions.changePassword
    }, dispatch)
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;