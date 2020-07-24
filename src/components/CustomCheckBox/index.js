import React, { Component } from 'react'

export default class CustomCheckBox extends Component {
    render() {
        return (
            <label className="checkbox-container">
                <input
                    type="checkbox"
                    name={this.props.name} 
                    onChange={this.props.onChange}
                    />
                {this.props.label}
                <span className="checkmark"></span>
            </label>
        )
    }
}
