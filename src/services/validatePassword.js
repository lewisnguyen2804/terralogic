let validatePassword = (password) => {
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;
    if (password.match(decimal)) return true
    else return false
}

export default validatePassword;