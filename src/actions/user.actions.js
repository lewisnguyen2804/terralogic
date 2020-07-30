import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

let login = (userLogin) => {
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
    let successLoggedUser = (user) => {
        return {
            type: userConstants.LOGGED_USER,
            user
        }
    }
    return dispatch => {
        dispatch(request(userLogin));
        dispatch(alertActions.clear())
        userService.login(userLogin)
            .then(
                user => {
                    if (user.status === 0) {
                        dispatch(failure(user));
                        dispatch(alertActions.error(user.msg));
                    }
                    else if (user.status === 1) {
                        dispatch(success(user));

                        // get information of logged user - jwt decode
                        dispatch(successLoggedUser(userService.getProfile(user)));
                        
                        dispatch(alertActions.clear())
                        history.push('/');
                    }
                }
            );
    };
}

let logout = () => {
    userService.logout();
    return dispatch => {
        dispatch(alertActions.clear())
        history.push('/');
        return {
            type: userConstants.LOGOUT
        };
    }
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
        dispatch(alertActions.clear())
        userService.register(userRegister)
            .then(
                user => {
                    if (user.status === 0) {
                        dispatch(failure(user));
                        dispatch(alertActions.error(user.msg));
                    }
                    else if (user.status === 1) {
                        dispatch(success(user));
                        dispatch(alertActions.success(user.msg));
                        // history.push('/login');
                    }
                }
            );
    };
}

let uploadImage = (formData, token) => {
    let request = () => {
        return {
            type: userConstants.UPLOAD_REQUEST
        }
    }
    let success = (link) => {
        return {
            type: userConstants.UPLOAD_SUCCESS,
            link
        }
    }
    let failure = () => {
        return {
            type: userConstants.UPLOAD_FAILURE
        }
    }
    return dispatch => {
        dispatch(request())
        userService.uploadImage(formData, token)
        .then(
            value => {
                if (value.status === 0) {
                    dispatch(failure())
                    dispatch(alertActions.error(value.msg));
                }
                else if (value.status === 1) {
                    dispatch(alertActions.success(value.msg));
                    // return link
                    dispatch(success(value.data));
                }
            }
        )
    }
}

let updateInformation = (data, token) => {
    let request = () => {
        return {
            type: userConstants.UPDATE_REQUEST
        }
    }
    let success = () => {
        return {
            type: userConstants.UPDATE_SUCCESS
        }
    }
    let failure = () => {
        return {
            type: userConstants.UPDATE_FAILURE
        }
    }
    return dispatch => {
        dispatch(request())
        userService.updateInformation(data, token)
        .then(
            value => {
                if (value.status === 0) {
                    dispatch(failure())
                    dispatch(alertActions.error(value.msg));
                }
                else if (value.status === 1) {
                    dispatch(success())
                    dispatch(alertActions.success(value.msg));
                }
            }
        )
    }
}

let changePassword = (data, token) => {
    let request = () => {
        return {
            type: userConstants.UPDATE_REQUEST
        }
    }
    let success = () => {
        return {
            type: userConstants.UPDATE_SUCCESS
        }
    }
    let failure = () => {
        return {
            type: userConstants.UPDATE_FAILURE
        }
    }
    return dispatch => {
        dispatch(request())
        userService.changePassword(data, token)
        .then(
            value => {
                if (value.status === 0) {
                    dispatch(failure())
                    dispatch(alertActions.error(value.msg));
                }
                else if (value.status === 1) {
                    dispatch(success())
                    dispatch(alertActions.success(value.msg));
                }
            }
        )
    }
}

export const userActions = {
    login,
    register,
    logout,
    uploadImage,
    updateInformation,
    changePassword
};