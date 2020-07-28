import apiUrl from './config';
import * as JWT from 'jwt-decode';

// VALIDATE EMAIL
let validateEmail = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(email).toLowerCase())
}

// VALIDATION LOGIN FORM
let validationLogin = (user) => {
    let isError = false;
    let msg = '';
    if (user.email === '' && user.password === '') {
        msg = 'Please type your email and password to login';
        isError = true;
    }
    else if (user.email === '' && user.password !== '') {
        msg = 'Please type your email';
        isError = true;
    }
    else if (user.email !== '' && user.password === '') {
        msg = 'Please type your password';
        isError = true;
    }
    else if (!validateEmail(user.email)) {
        msg = `"${user.email}" is not an email`;
        isError = true;
    }
    else if (user.password.length < 8) {
        msg = 'Password must be at least 8 characters';
        isError = true;
    }
    if (isError) {
        return { msg: msg, status: 0 }
    }
    else return { msg: "OK", status: 1 }
}

// VALIDATION REGISTER FORM
let validationRegister = (user) => {
    let isError = false;
    let msg = '';
    if (user.email === '' || user.password === '' || user.name === '' || user.phone === '') {
        msg = 'Please fill your information to register';
        isError = true;
    }
    else if (!validateEmail(user.email)) {
        msg = `"${user.email}" is not an email`;
        isError = true;
    }
    else if (user.password.length < 8) {
        msg = 'Password must be at least 8 characters';
        isError = true;
    }
    else if (user.confirmPassword !== user.password) {
        msg = 'Passwords are not match';
        isError = true;
    }
    if (isError) {
        return { msg: msg, status: 0 }
    }
    else return { msg: "OK", status: 1 }
}


// LOGIN
let login = async (user) => {
    if (validationLogin(user).status === 1) {
        var options = {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        };

        try {
            let fetchResponse = await fetch(`${apiUrl}/login`, options);
            let data = await fetchResponse.json();
            console.log(data); //
            localStorage.setItem('user', JSON.stringify(data));
            return data;
        } catch (e) {
            // SOMETHING WRONG WITH LOGIN
            console.log("error: " + e);
        }
    }
    else {
        return validationLogin(user);
    }
}

// LOGOUT
let logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('userLogged');
}

// REGISTER
let register = async (user) => {
    let userRequest = {
        email: user.email,
        password: user.password,
        name: user.name,
        phone: user.phone
    }

    if (validationRegister(user).status === 1) {
        var options = {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userRequest)
        };

        try {
            let fetchResponse = await fetch(`${apiUrl}/register`, options);
            let data = await fetchResponse.json();
            console.log(data); //
            return data;
        } catch (e) {
            // SOMETHING WRONG WITH REGISTER
            console.log("error: " + e);
        }
    }
    else {
        return validationRegister(user)
    }
}

let getProfile = (userLoggedIn) => {
    var decoded = JWT(userLoggedIn.token);
    localStorage.setItem('userLogged', JSON.stringify(decoded));
    return decoded
}

let uploadImage = async (formData, token) => {
    let authorizationCode = `Bearer ${token}`;
    var options = {
        'method': 'POST',
        'headers': {
            'Authorization': authorizationCode,
        },
        body: formData
    };

    try {
        let fetchResponse = await fetch(`${apiUrl}/upload`, options);
        let data = await fetchResponse.json();
        console.log("update picture: ", data)
        // localStorage.setItem('userImage', JSON.stringify(data));

        // update avatar on user logged
        let value = JSON.parse(localStorage.getItem('userLogged'));
        let newImage = {
            ...value,
            avatar: data.data
        }
        localStorage.setItem('userLogged', JSON.stringify(newImage));

        return data
    } catch (e) {
        console.log("error: " + e);
    }
}

let updateInformation = async (data, token) => {
    let authorizationCode = `Bearer ${token}`;
    var options = {
        'method': 'PATCH',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': authorizationCode,
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
    };

    try {
        let fetchResponse = await fetch(`${apiUrl}/update`, options);
        let data = await fetchResponse.json();
        console.log("update information: ", data)
        return data
    } catch (e) {
        console.log("error: " + e);
    }
}


let changePassword = async (data, token) => {
    let authorizationCode = `Bearer ${token}`;
    var options = {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': authorizationCode,
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
    };

    try {
        console.log("updating password"); //
        let fetchResponse = await fetch(`${apiUrl}/changePassword`, options);
        let data = await fetchResponse.json();
        return data
    } catch (e) {
        console.log("error: " + e);
    }
}


export const userService = {
    login,
    register,
    logout,
    getProfile,
    uploadImage,
    updateInformation,
    changePassword
};
