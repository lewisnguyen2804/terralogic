import React, { Component } from 'react'

export default class RoundedInput extends Component {
    render() {
        const {
            title = 'Input Title',
            icon = '',
            type = 'text',
            value = '',
            placeholder = 'placeholder',
            name = 'defaultName',
            handleChange = {},
            isPassword = 'false',
            showPwdClassName = '',
            showPwdOnClick = {},
            showPwdIcon = ''
        } = this.props;
        return (
            <div className="input-container">
                <p className="input-title">{title}</p>
                <div className="input-with-icon">
                    <img className="input-icon" alt="input-icon" src={icon} />
                    <input
                        className="input-text"
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        name={name}
                        onChange={handleChange}
                    />
                    {isPassword === 'true' ?
                        <img className={showPwdClassName}
                            alt="pwd-icon"
                            onClick={showPwdOnClick}
                            src={showPwdIcon} />
                        : ''}
                </div>
            </div>
        )
    }
}
