import apiUrl from './config';


// LOGIN
let login = async (email, password) => {
    var options = {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    };

    try {
        let fetchResponse = await fetch(`${apiUrl}/login`, options);
        let data = await fetchResponse.json();
        console.log(data); //
        localStorage.setItem('user', data);
        return data;
    } catch (e) {
        // SOMETHING WRONG WITH LOGIN
        console.log("error: " + e);
    }
}

// LOGOUT
let logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

// REGISTER
let register = async (user) => {
    var options = {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
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

export const userService = {
    login,
    register,
    logout
};
