import validator from 'validator';

const validateEmail = (email) => {
    const isValidEmail = validator.isEmail(email)
    return (isValidEmail)
}

export default validateEmail;