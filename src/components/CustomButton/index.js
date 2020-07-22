import React, { Component } from 'react'
import './style.scss';

export default class CustomButton extends Component {
    render() {
        return (
            <input
                type={this.props.type}
                className={this.props.className}
                onClick={this.props.onClick}
                value={this.props.value} />
        )
    }
}
