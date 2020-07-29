import React, { Component } from 'react'
import Logo from '../../assets/images/brand-logo.svg'

export default class CompanyLogo extends Component {
    render() {
        return (
            <div>
                <img className="company-logo" src={Logo} alt="logo" />
                <h6 className="logo-description">START YOUR PERSONAL PHOTO EXPERIENCE</h6>
            </div>
        )
    }
}
