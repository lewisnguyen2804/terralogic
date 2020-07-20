import React, { Component } from 'react'
import './style.scss'

export default class PageTitle extends Component {
    render() {
        return (
            <div className="container-fluid header">
                <div className="container header-text">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}
