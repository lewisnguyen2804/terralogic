import React, { Component } from 'react'

export default class CustomButton extends Component {
    render() {
        const { 
            type = 'button', 
            className = '', 
            onClick = {}, 
            value = "Button" 
        } = this.props;
        return (
            <input
                type={type}
                className={className}
                onClick={onClick}
                value={value} />
        )
    }
}
