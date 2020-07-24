import React, { Component } from 'react'
import './style.scss';

export default class UserCard extends Component {
    render() {
        return (
            <div className="name-image">
                <img className="user-image" alt="user-img" src={this.props.image} />
                <h2 className="user-name">{this.props.name}</h2>
            </div>
        )
    }
}
