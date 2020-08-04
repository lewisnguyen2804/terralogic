import * as JWT from 'jwt-decode';
import validateForms from './validateForms';
import API from './config';

// LOGIN
let login = async (user) => {
    if (validateForms.validationLogin(user).status === 1) {
        var options = {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        };

        try {
            let fetchResponse = await fetch(`${API.apiUrl}/login`, options);
            let data = await fetchResponse.json();
            console.log(data); //
            localStorage.setItem('user', JSON.stringify(data));
            sessionStorage.setItem('user', JSON.stringify(data));
            return data;
        } catch (e) {
            // SOMETHING WRONG WITH LOGIN
            console.log("error: " + e);
        }
    }
    else {
        return validateForms.validationLogin(user);
    }
}

// LOGOUT
let logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('userLogged');
    sessionStorage.removeItem('user');
    return true
}

// REGISTER
let register = async (user) => {
    let userRequest = {
        email: user.email,
        password: user.password,
        name: user.name,
        phone: user.phone
    }

    if (validateForms.validationRegister(user).status === 1) {
        var options = {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userRequest)
        };

        try {
            let fetchResponse = await fetch(`${API.apiUrl}/register`, options);
            let data = await fetchResponse.json();
            console.log(data); //
            return data;
        } catch (e) {
            // SOMETHING WRONG WITH REGISTER
            console.log("error: " + e);
        }
    }
    else {
        return validateForms.validationRegister(user)
    }
}

let getProfile = (userLoggedIn) => {
    var decoded = JWT(userLoggedIn.token);
    localStorage.setItem('userLogged', JSON.stringify(decoded));
    console.log('token decode: ', decoded)
    return decoded
}

let uploadImage = async (formData, token) => {
    if (validateForms.validationImage(formData).status === 1) {
        let authorizationCode = `Bearer ${token}`;
        var options = {
            'method': 'POST',
            'headers': {
                'Authorization': authorizationCode,
            },
            body: formData
        };

        try {
            let fetchResponse = await fetch(`${API.apiUrl}/upload`, options);
            let data = await fetchResponse.json();
            console.log("update picture: ", data)

            // update avatar on user logged
            let value = JSON.parse(localStorage.getItem('userLogged'));
            let newImage = {
                ...value,
                avatar: data.data
            }
            localStorage.setItem('userLogged', JSON.stringify(newImage));

            return data
        } catch (e) {
            // console.log("error: " + e);
        }
    }
    else return validateForms.validationImage(formData)
}

let updateInformation = async (data, token) => {
    if (validateForms.validationProfileInfo(data).status === 1) {
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
            let fetchResponse = await fetch(`${API.apiUrl}/update`, options);
            let data = await fetchResponse.json();
            console.log("update information: ", data)
            return data
        } catch (e) {
            // console.log("error: " + e);
        }
    }
    else {
        return validateForms.validationProfileInfo(data)
    }
}


let changePassword = async (data, token) => {
    if (validateForms.validationChangePassword(data).status === 1) {
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
            let fetchResponse = await fetch(`${API.apiUrl}/changePassword`, options);
            let data = await fetchResponse.json();
            return data
        } catch (e) {
            // console.log("error: " + e);
        }
    }
    else {
        return validateForms.validationChangePassword(data)
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
