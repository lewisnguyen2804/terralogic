let validatePhoneNumber = (number) => {
    const regexp = /^\d{10,11}$/;
    const checkingResult = regexp.exec(number);
    if (checkingResult !== null) {
        return true
    }
    else return false
}

export default validatePhoneNumber;