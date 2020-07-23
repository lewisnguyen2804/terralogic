import { userConstants } from '../constants';
import { userService } from '../services';
// import { alertActions } from './';
import { history } from '../helpers';

let login = (email, password) => {
    let request = (user) => {
        return {
            type: userConstants.LOGIN_REQUEST,
            user
        }
    }
    let success = (user) => {
        return {
            type: userConstants.LOGIN_SUCCESS,
            user
        }
    }
    let failure = (user) => {
        return {
            type: userConstants.LOGIN_FAILURE,
            user
        }
    }
    return dispatch => {
        dispatch(request({ email, password }));
        userService.login(email, password)
            .then(
                user => {
                    if (user.status === 0) {
                        dispatch(failure(user));
                    }
                    else if (user.status === 1) {
                        dispatch(success(user));
                        history.push('/profile');
                    }
                }
            );
    };
}

let logout = () => {
    userService.logout();
    history.push('/');
    return { type: userConstants.LOGOUT };
}

let register = (userRegister) => {
    let request = (user) => {
        return {
            type: userConstants.REGISTER_REQUEST,
            user
        }
    }
    let success = (user) => {
        return {
            type: userConstants.REGISTER_SUCCESS,
            user
        }
    }
    let failure = (user) => {
        return {
            type: userConstants.REGISTER_FAILURE,
            user
        }
    }
    return dispatch => {
        dispatch(request(userRegister));
        userService.register(userRegister)
            .then(
                user => {
                    if (user.status === 0) {
                        dispatch(failure(user));
                    }
                    else if (user.status === 1) {
                        dispatch(success(user));
                        history.push('/login');
                    }
                }
            );
    };
}

export const userActions = {
    login,
    register,
    logout
};