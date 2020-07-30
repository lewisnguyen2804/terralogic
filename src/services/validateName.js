const validateName = (name) => {
    const regexp = /^[A-Za-z\s]+$/;
    const checkingResult = regexp.exec(name);
    if (checkingResult !== null) {
        return true
    }
    return false
}

export default validateName;