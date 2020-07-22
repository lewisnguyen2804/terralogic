import apiUrl from './config';

export const userService = {
    login,
    register
};

// LOGIN
async function login(email, password) {
    var options = {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        };

    try {
        const fetchResponse = await fetch(`${apiUrl}/login`, options);
        const data = await fetchResponse.json();

        // LOGIN SUCCESSED
        // console.log("data: " + JSON.stringify(data));
    } catch (e) {
        // SOMETHING WRONG WITH LOGIN
        console.log("error: " + e);
    }   
}

// REGISTER
async function register (email, password, name, phone) {
    var options = {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, name, phone })
        };

    try {
        const fetchResponse = await fetch(`${apiUrl}/register`, options);
        const data = await fetchResponse.json();

        // REGISTER SUCCESSED
        // console.log("data: " + JSON.stringify(data));
    } catch (e) {
        // SOMETHING WRONG WITH REGISTER
        console.log("error: " + e);
    }   
}