import React, { Component } from 'react'
import './style.scss';

export default class UserCard extends Component {
    render() {
        return (
            <div className="name-avatar">
                <img className="user-avatar" src={this.props.avatar} />
                <h2 className="user-name">{this.props.name}</h2>
            </div>
        )
    }
}
