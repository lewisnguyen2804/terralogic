import React, { Component } from 'react'
import ChangeUserImage from '../../assets/images/edit_photo.svg';

export default class UserCard extends Component {
    render() {
        const {
            name = 'Unknown',
            handleClick = {},
            image = 'http://api.terralogic.ngrok.io/-MDo7lIKOI7gn0-DNdNr_1596502631300_users-vector-icon-png_260862.jpg'
        } = this.props;
        return (
            <div className="name-image">
                <div className="user-image-change">
                    <img className="user-image"
                        alt="user-img"
                        src={image} />
                    <img className="user-image-change-icon"
                        src={ChangeUserImage}
                        alt="change-user-img"
                        onClick={handleClick} />
                </div>
                <h2 className="user-name">{name}</h2>
            </div>
        )
    }
}
