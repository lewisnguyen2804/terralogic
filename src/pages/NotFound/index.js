import React, { Component } from 'react'
import CustomButton from '../../components/CustomButton';
import { history } from '../../helpers/history';

export default class NotFound extends Component {
    goHome = () => {
        history.push("/")
    }

    render() {
        return (
            <div className="notfound-container">
                <div className="notfound-centering">
                    <div className="notfound-title">
                        <h2>PAGE NOT FOUND</h2>
                    </div>
                    <div className="notfound-return-button">
                        <CustomButton
                            type="button"
                            className="button-type-1 notfound-return-button"
                            onClick={this.goHome}
                            value="HOME" />
                    </div>
                </div>
            </div>
        )
    }
}
