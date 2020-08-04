import React, { Component } from 'react'

export default class CustomCheckBox extends Component {
    render() {
        const {
            name = 'checkbox',
            onChange = {},
            label = "Checkbox Label" 
        } = this.props;
        return (
            <label className="checkbox-container">
                <input
                    type="checkbox"
                    name={name}
                    onChange={onChange}
                />
                {label}
                <span className="checkmark"></span>
            </label>
        )
    }
}
