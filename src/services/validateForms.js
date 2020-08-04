import validator from 'validator';

// VALIDATE
import validateEmail from './validateEmail';
import validateName from './validateName';
import validatePhoneNumber from './validatePhoneNumber';
import validatePassword from './validatePassword';


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
        msg = 'Please fill your information';
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

    const regexp = /[^/]+(jpg|png|jpeg|gif|JPG|PNG|JPEG|GIF)$/;
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

const validateForms = {
    validationLogin,
    validationChangePassword,
    validationImage,
    validationProfileInfo,
    validationRegister
}

export default validateForms;