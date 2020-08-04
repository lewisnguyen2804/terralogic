import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const rememberUser = localStorage.getItem('rememberUser');
        let user = {};
        if (rememberUser === 'false') {
            user = sessionStorage.getItem('user');
        } else {
            user = localStorage.getItem('user');
        }

        return (rememberUser === 'true') ?
            <Component {...props} /> : (!user) ? 
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} /> : <Component {...props} />;

    }} />
)

export default PrivateRoute;