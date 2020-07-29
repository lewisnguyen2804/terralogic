import React, { Component } from 'react'
import ChangeUserImage from '../../../assets/images/edit_photo.svg';

export default class UserCard extends Component {
    render() {
        return (
            <div className="name-image">
                <div className="user-image-change">
                    <img className="user-image"
                        alt="user-img"
                        src={this.props.image} />
                    <img className="user-image-change-icon"
                        src={ChangeUserImage}
                        alt="change-user-img"
                        onClick={this.props.handleClick} />
                </div>
                <h2 className="user-name">{this.props.name}</h2>
            </div>
        )
    }
}
