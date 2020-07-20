import React, { Component } from 'react'
import './style.scss';

export default class Button extends Component {
    render() {
        return (
            <div>
                <input type={this.props.buttonType} className={this.props.buttonClassName} value={this.props.buttonValue} />
            </div>
        )
    }
}
