import React, { Component } from 'react'
import './style.scss';

export default class SquaredInput extends Component {
    render() {
        return (
            <div className="input-group">
                <label>{this.props.title}</label>
                <input
                    type={this.props.type}
                    value={this.props.value}
                    onChange={this.props.handleChange}
                    name={this.props.name} />
                {this.props.isPassword === "true" ?
                    <img
                        src={this.props.imgSrc}
                        className={this.props.imgClassName}
                        alt={this.props.imgAlt}
                        onClick={this.props.onShowPasswordClick} />
                    : ''}

            </div>

        )
    }
}
