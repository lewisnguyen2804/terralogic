import React, { Component } from 'react'
import './style.scss';

export default class ProfileInput extends Component {
    render() {
        return (
            <div className="input-group">
                <label>{this.props.inputTitle}</label>
                <input type={this.props.inputType} value={this.props.inputValue} name={this.props.inputName} />
            </div>
        )
    }
}
