import React, { Component } from 'react'
import CoImage from '../../assets/images/solution-experts.png'


export default class CompanyImage extends Component {
    render() {
        return (
            <div>
                <img className="company-image" src={CoImage} alt="company-img" />
            </div>
        )
    }
}
