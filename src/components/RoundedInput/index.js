import React, { Component } from 'react'
import './style.scss'

export default class RoundedInput extends Component {
    render() {
        return (
            <div className="input-container">
                <p className="input-title">{this.props.title}</p>
                <div className="input-with-icon">
                    <img className="input-icon" src={this.props.icon} />
                    <input
                        className="input-text"
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        name={this.props.name}
                        onChange={this.props.handleChange}
                    />
                    {this.props.isPassword === 'true' ? <img className={this.props.showPwdClassName} onClick={this.props.showPwdOnClick} src={this.props.showPwdIcon} />:''}
                </div>
            </div>
        )
    }
}
