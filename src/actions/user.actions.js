import { userConstants } from '../constants';
import { userService } from '../services';
// import { alertActions } from './';
import { history } from '../helpers';

export const userActions = {
    login,
    register,
    logout
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email, password }));

        userService.login(email, password)
            .then(
                user => {
                    if (user.status === 0) {
                        dispatch(failure(user));
                    }
                    else {
                        dispatch(success(user));
                        history.push('/profile');
                    }
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(user) { return { type: userConstants.LOGIN_FAILURE, user } }
}

function logout() {
    userService.logout();
    history.push('/');
    return { type: userConstants.LOGOUT };
}

function register(userRegister) {
    return dispatch => {
        dispatch(request(userRegister));

        userService.register(userRegister)
            .then(
                user => {
                    if (user.status === 0) {
                        dispatch(failure(user));
                    }
                    else {
                        dispatch(success(user));
                        history.push('/login');
                    }
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(user) { return { type: userConstants.REGISTER_FAILURE, user } }
}
