import React, { Component } from 'react'
import ProfileContainer from '../../containers/ProfileForm';

export default class Profile extends Component {

    render() {
        return (
            <div className="container">
                <div className="container-fuild profile-container mt-5 mb-5">
                    <ProfileContainer />
                </div>
            </div>
        )
    }
}

