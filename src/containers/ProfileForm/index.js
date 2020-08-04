import React, { Component } from 'react'
import { bindActionCreators } from 'redux';

import ShowPasswordIcon from '../../assets/images/Suche03.svg';

import UserCard from '../../components/UserCard';
import SquaredInput from '../../components/SquaredInput';
import CustomButton from '../../components/CustomButton';

import { connect } from 'react-redux';
import { userActions } from '../../actions';

import API from '../../services/config';
import LoadingScreen from '../../components/LoadingScreen';

class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            phone: '',
            userImage: '',

            currentPwd: '',
            newPwd: '',
            confirmPwd: '',
            showCurrentPwd: false,
            showNewPwd: false,
            showConfirmPwd: false,

            user: null,
            userLogged: null
        };

    }

    componentDidMount = () => {
        // user decoded
        let userLogged = localStorage.getItem('userLogged');
        let userLoggedObj = JSON.parse(userLogged);
        // user with token
        let user = localStorage.getItem('user');
        let userObj = JSON.parse(user);

        try {
            this.setState({
                user: userObj,
                userLogged: userLoggedObj,
                fullName: userLoggedObj.name,
                email: userLoggedObj.email,
                phone: userLoggedObj.phone,
                userImage: userLoggedObj.avatar
            })
        } catch (e) {
            console.log("error get profile: " + e);
        }
    }

    // UPDATE LOCAL STORAGE ON VALUE CHANGES
    updateLocalStorage = () => {
        let value = JSON.parse(localStorage.getItem('userLogged'));
        let newUser = {}
        if (value.email !== this.state.email || value.name !== this.state.name || value.phone !== this.state.phone) {
            newUser = {
                ...value,
                email: this.state.email,
                name: this.state.fullName,
                phone: this.state.phone,
                displayName: this.state.fullName
            }
        }
        localStorage.setItem('userLogged', JSON.stringify(newUser));
    }


    // UPLOAD FILES/IMAGES
    handleUploadClick = (event) => {
        this.refs.fileUploader.click();
    }

    onFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const dataForm = new FormData();
            dataForm.append("file", file);
            this.props.uploadImage(dataForm, this.state.user.token)
        }
    };

    // EDIT PROFILE
    editProfile = () => {
        this.updateInformation();
        this.changePassword();
    }

    // UPDATE INFORMATION
    updateInformation = () => {
        const data = {
            name: this.state.fullName,
            email: this.state.email,
            phone: this.state.phone
        }
        let userLogged = localStorage.getItem('userLogged');
        let userLoggedObj = JSON.parse(userLogged);

        if (data.name !== userLoggedObj.name || data.email !== userLoggedObj.email || data.phone !== userLoggedObj.phone) {
            this.props.updateInformation(data, this.state.user.token);
            this.updateLocalStorage();
        }
    }

    // CHANGE PASSWORD
    changePassword = () => {
        const data = {
            "currentPassword": this.state.currentPwd,
            "newPassword": this.state.newPwd,
            "confirmPassword": this.state.confirmPwd,
        }
        if (data.currentPassword !== '' || data.newPassword !== '' || data.confirmPassword !== '') {
            this.props.changePassword(data, this.state.user.token);
        }
    }


    // HANDLE INPUTS
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
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

    // LOGOUT
    onLogOutClick = () => {
        this.props.logout();
    }

    render() {
        const currentPasswordType = this.state.showCurrentPwd ? "text" : "password";
        const newPasswordType = this.state.showNewPwd ? "text" : "password";
        const confirmPasswordType = this.state.showConfirmPwd ? "text" : "password";

        // user image
        let userImage = (this.props.link !== undefined) ? `${API.webUrl}${this.props.link}` : `${API.webUrl}${this.state.userImage}`;
        // default user image
        if (userImage === `${API.webUrl}undefined`) {
            userImage = `${API.webUrl}-MDo7lIKOI7gn0-DNdNr_1596502631300_users-vector-icon-png_260862.jpg`
        }
        return (
            <div>
                <div className="header">
                    <div className="container header-text pl-sm-2 pr-sm-2 pl-md-5 pr-md-5">
                        <h2>My Profile</h2>
                        <p>Manage your profile and contact information.</p>
                    </div>
                </div>

                <div className="container pl-sm-2 pr-sm-2 pl-md-5 pr-md-5">
                    <UserCard
                        image={userImage}
                        name={this.state.fullName}
                        handleClick={this.handleUploadClick}
                    />

                    {/* UPLOAD IMAGE */}
                    <input type="file"
                        ref="fileUploader"
                        onChange={this.onFileChange}
                        style={{ display: "none" }} />

                    {
                        this.props.uploading &&
                        <LoadingScreen />
                    }


                    <div className="contact-information">
                        <div className="row">
                            <div className="col-sm-6">
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
                            <div className="col-sm">
                                <SquaredInput
                                    type="text"
                                    title="Email"
                                    value={this.state.email}
                                    name="email"
                                    handleChange={this.handleChange}
                                />
                            </div>
                            <div className="col-sm">
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
                            <div className="col-sm-6">
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
                            <div className="col-sm">
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
                            <div className="col-sm">
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
                        {this.props.updating &&
                            <CustomButton
                                type="button"
                                className="button-type-1 button-enable"
                                onClick={this.editProfile}
                                value="Saving..." />
                        }
                        {!this.props.updating &&
                            <CustomButton
                                type="button"
                                className="button-type-1 button-enable"
                                onClick={this.editProfile}
                                value="Save" />
                        }

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

let mapStateToProps = (state) => {
    const { link, uploading } = state.uploadImage;
    const { updating } = state.update;
    return { link, updating, uploading };
}

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        logout: userActions.logout,
        uploadImage: userActions.uploadImage,
        updateInformation: userActions.updateInformation,
        changePassword: userActions.changePassword,
    }, dispatch)
}
export { ProfileForm };
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
export default ProfileContainer;