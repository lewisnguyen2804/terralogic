import apiUrl from './config';
import * as JWT from 'jwt-decode';
import validator from 'validator';

// VALIDATE EMAIL
let validateEmail = (email) => {
    const isValidEmail = validator.isEmail(email)
    return (isValidEmail)
}

// VALIDATE PHONE NUMBER
let validatePhoneNumber = (number) => {
    const regexp = /^\d{10,11}$/;
    const checkingResult = regexp.exec(number);
    if (checkingResult !== null) {
        return true
    }
    else return false
}

// VALIDATE NAME
let validateName = (name) => {
    const regexp = /^[A-Za-z\s]+$/;
    const checkingResult = regexp.exec(name);
    if (checkingResult !== null) {
        return true
    }
    return false
}

// VALIDATE PASSWORD
let validatePassword = (password) => {
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;
    if (password.match(decimal)) return true
    else return false
}

// VALIDATION LOGIN FORM
let validationLogin = (user) => {
    let isError = false;
    let msg = '';
    if (validator.isEmpty(user.email) && validator.isEmpty(user.password)) {
        msg = 'Please type your email and password to login';
        isError = true;
    }
    else if (validator.isEmpty(user.email) && !validator.isEmpty(user.password)) {
        msg = 'Please type your email';
        isError = true;
    }
    else if (!validator.isEmpty(user.email) && validator.isEmpty(user.password)) {
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
    if (validator.isEmpty(user.email) || validator.isEmpty(user.password) || validator.isEmpty(user.confirmPassword) || validator.isEmpty(user.name) || validator.isEmpty(user.phone)) {
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
    else if (!validatePassword(user.password)) {
        msg = 'Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character';
        isError = true;
    }
    else if (user.confirmPassword !== user.password) {
        msg = 'Passwords are not match';
        isError = true;
    }
    else if (!validateName(user.name)) {
        msg = 'Invalid name';
        isError = true;
    }
    else if (!validatePhoneNumber(user.phone)) {
        msg = 'Invalid phone number';
        isError = true;
    }
    if (isError) {
        return { msg: msg, status: 0 }
    }
    else return { msg: "OK", status: 1 }
}

// VALIDATE PROFILE FORM
let validationProfileInfo = (data) => {
    let isError = false;
    let msg = '';
    if (validator.isEmpty(data.email) || validator.isEmpty(data.name) || validator.isEmpty(data.phone)) {
        msg = 'Please fill your information to register';
        isError = true;
    }
    else if (!validateEmail(data.email)) {
        msg = `"${data.email}" is not an email`;
        isError = true;
    }
    else if (!validateName(data.name)) {
        msg = 'Invalid name';
        isError = true;
    }
    else if (!validatePhoneNumber(data.phone)) {
        msg = 'Invalid phone number';
        isError = true;
    }
    if (isError) {
        return { msg: msg, status: 0 }
    }
    else return { msg: "OK", status: 1 }
}


// VALIDATE PROFILE FORM
let validationChangePassword = (data) => {
    let isError = false;
    let msg = '';
    if (validator.isEmpty(data.currentPassword) || validator.isEmpty(data.newPassword) || validator.isEmpty(data.confirmPassword)) {
        msg = 'Please fill your password fields';
        isError = true;
    }
    else if (data.newPassword.length < 8) {
        msg = 'Password must be at least 8 characters';
        isError = true;
    }
    else if (!validatePassword(data.newPassword)) {
        msg = 'Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character';
        isError = true;
    }
    else if (data.newPassword !== data.confirmPassword) {
        msg = 'The new password and confirm password are not match';
        isError = true;
    }
    if (isError) {
        return { msg: msg, status: 0 }
    }
    else return { msg: "OK", status: 1 }
}

// VALIDATION FORM DATA UPLOAD IMAGE
let validationImage = (formData) => {
    let isError = false;
    let msg = '';
    let fileName = '';
    for (var pair of formData.entries()) {
        fileName = pair[1].name
    }

    const regexp = /[^/]+(jpg|png|jpeg|gif)$/;
    const checkingResult = fileName.match(regexp);
    if (checkingResult === null) {
        msg = "File format is not an image"
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
    if (validationImage(formData).status === 1) {
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
    else return validationImage(formData)
}

let updateInformation = async (data, token) => {
    if (validationProfileInfo(data).status === 1) {
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
    else {
        return validationProfileInfo(data)
    }
}


let changePassword = async (data, token) => {
    if (validationChangePassword(data).status === 1) {
        let passPack = {
            "password": data.newPassword,
            "currentPassword": data.currentPassword
        }
        let authorizationCode = `Bearer ${token}`;
        var options = {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': authorizationCode,
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(passPack)
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
    else {
        return validationChangePassword(data)
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
