import React, { Component } from 'react'

export default class SquaredInput extends Component {
    render() {
        const {
            title = 'Input Title',
            type = 'text',
            value = '',
            name = 'defaultName',
            handleChange = {},
            isPassword = 'false',
            imgClassName = '',
            onShowPasswordClick = {},
            imgAlt = 'show-password-icon',
            imgSrc = ''
        } = this.props;
        return (
            <div className="input-group">
                <label>{title}</label>
                <input
                    type={type}
                    value={value}
                    onChange={handleChange}
                    name={name} />
                {isPassword === "true" ?
                    <img
                        src={imgSrc}
                        className={imgClassName}
                        alt={imgAlt}
                        onClick={onShowPasswordClick} />
                    : ''}
            </div>
        )
    }
}
