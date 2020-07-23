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
        let fetchResponse = await fetch(`${apiUrl}/login`, options);
        let data = await fetchResponse.json();

        console.log(data);

        if (data.status === 1) {
            localStorage.setItem('user', data);
            return data;
        } else if (data.status === 0) {
            return null;
        }

    } catch (e) {
        // SOMETHING WRONG WITH LOGIN
        console.log("error: " + e);
    }
}

// LOGOUT
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

// REGISTER
async function register(user) {
    var options = {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };

    try {
        let fetchResponse = await fetch(`${apiUrl}/regiser`, options);
        let data = await fetchResponse.json();

        console.log(data);

        if (data.status === 1) {
            return data;
        } else if (data.status === 0) {
            return null;
        }

    } catch (e) {
        // SOMETHING WRONG WITH REGISTER
        console.log("error: " + e);
    }
}