import validateEmail from '../validateEmail';
import validateName from '../validateName';
import validatePassword from '../validatePassword';
import validatePhoneNumber from '../validatePhoneNumber';
import validateForms from '../validateForms';


describe('Test Services', () => {

    it('Test validate email', () => {
        const value = validateEmail('tuan@gmail.com');
        expect(value).toBe(true);
    });

    it('Test validate password', () => {
        const value = validatePassword('Abc123!!!');
        expect(value).toBe(true);
    });

    it('Test validate name', () => {
        const value = validateName('Nguyen Van A');
        expect(value).toBe(true);
    });

    it('Test validate phone number', () => {
        const value = validatePhoneNumber('0372988392');
        expect(value).toBe(true);
    });

    it('Test validate phone number', () => {
        const value = validatePhoneNumber('0372988392');
        expect(value).toBe(true);
    });

    // LOGIN FORM

    it('Test validate login form', () => {
        const loginUser = {
            email: 'ngoctuanitpy@gmail.com',
            password: 'Abc123!!!'
        }
        let value = validateForms.validationLogin(loginUser);
        expect(value.status).toEqual(1);
    });


    it('Test validate login form', () => {
        const loginUser1 = {
            email: '',
            password: ''
        }
        let value = validateForms.validationLogin(loginUser1);
        expect(value.status).toEqual(0);
    });


    // REGISTER FORM
    it('Test validate register form', () => {
        const registerUser = {
            email: 'ngoctuanitpy@gmail.com',
            password: 'Abc123!!!',
            confirmPassword: 'Abc123!!!',
            name: 'Tuan Nguyen',
            phone: '0392938232'
        }
        const value = validateForms.validationRegister(registerUser);
        expect(value.status).toEqual(1);
    });

    it('Test validate register form - invalid email', () => {
        const registerUser1 = {
            email: 'ngoctuanitpygmail.com',
            password: 'Abc123!!!',
            confirmPassword: 'Abc123!!!',
            name: 'Tuan Nguyen',
            phone: '0392938232'
        }
        const value = validateForms.validationRegister(registerUser1);
        expect(value.status).toEqual(0);
    });

    it('Test validate register form - invalid password', () => {
        const registerUser2 = {
            email: 'ngoctuanitpy@gmail.com',
            password: 'Abc123aaaaaa',
            confirmPassword: 'Abc123aaaaaa',
            name: 'Tuan Nguyen',
            phone: '0392938232'
        }
        const value = validateForms.validationRegister(registerUser2);
        expect(value.status).toEqual(0);
    });


    it('Test validate register form - password < 8', () => {
        const registerUser3 = {
            email: 'ngoctuanitpy@gmail.com',
            password: '123',
            confirmPassword: '123',
            name: 'Tuan Nguyen',
            phone: '0392938232'
        }
        const value = validateForms.validationRegister(registerUser3);
        expect(value.status).toEqual(0);
    });

    it('Test validate register form - passwords are not the same', () => {
        const registerUser4 = {
            email: 'ngoctuanitpy@gmail.com',
            password: 'Abc123!!!!!!',
            confirmPassword: 'Abc123!!',
            name: 'Tuan Nguyen',
            phone: '0392938232'
        }
        const value = validateForms.validationRegister(registerUser4);
        expect(value.status).toEqual(0);
    });


    it('Test validate register form - invalid name', () => {
        const registerUser5 = {
            email: 'ngoctuanitpy@gmail.com',
            password: 'Abc123!!!!!!',
            confirmPassword: 'Abc123!!!!!!',
            name: 'Tuan Nguyen 123',
            phone: '0392938232'
        }

        const value = validateForms.validationRegister(registerUser5);
        expect(value.status).toEqual(0);
    });

    it('Test validate register form - invalid phone', () => {
        const registerUser6 = {
            email: 'ngoctuanitpy@gmail.com',
            password: 'Abc123!!!!!!',
            confirmPassword: 'Abc123!!!!!!',
            name: 'Tuan Nguyen',
            phone: '123'
        }
        const value = validateForms.validationRegister(registerUser6);
        expect(value.status).toEqual(0);
    });

    // PROFILE FORM
    it('Test validate update information form', () => {
        const updateInformationUser = {
            email: 'ngoctuanitpy@gmail.com',
            name: 'Tuan Nguyen',
            phone: '0392938232'
        }
        const value = validateForms.validationProfileInfo(updateInformationUser);
        expect(value.status).toEqual(1);
    });


    it('Test validate invalid name', () => {
        const updateInformationUser1 = {
            email: 'ngoctuanitpy@gmail.com',
            name: 'Tuan Nguyen 123',
            phone: '0392938232'
        }
        const value = validateForms.validationProfileInfo(updateInformationUser1);
        expect(value.status).toEqual(0);
    });


    it('Test validate invalid email', () => {
        const updateInformationUser2 = {
            email: 'ngoctuanitpygmail.com',
            name: 'Tuan Nguyen',
            phone: '0392938232'
        }
        const value = validateForms.validationProfileInfo(updateInformationUser2);
        expect(value.status).toEqual(0);
    });

    it('Test validate invalid phone number', () => {
        const updateInformationUser3 = {
            email: 'ngoctuanitpy@gmail.com',
            name: 'Tuan Nguyen',
            phone: '022'
        }
        const value = validateForms.validationProfileInfo(updateInformationUser3);
        expect(value.status).toEqual(0);
    });

    // CHANGE PASSWORD

    it('Test validate 3 password inputs are valid', () => {
        const updatePasswordUser = {
            currentPassword: 'Abc123!!!',
            newPassword: 'Edf123!!!',
            confirmPassword: 'Edf123!!!',
        }
        const value = validateForms.validationChangePassword(updatePasswordUser);
        expect(value.status).toEqual(1);
    });

    it('Test validate error new password', () => {
        const updatePasswordUser1 = {
            currentPassword: 'Abc123!!!',
            newPassword: 'Edf123asdasd',
            confirmPassword: 'Edf123asdasd',
        }
        const value = validateForms.validationChangePassword(updatePasswordUser1);
        expect(value.status).toEqual(0);
    });


    it('Test validate error new password and confirm password is not equal', () => {
        const updatePasswordUser2 = {
            currentPassword: 'Abc123!!!',
            newPassword: '!Edf123asdasd',
            confirmPassword: '!Edf12335525',
        }
        const value = validateForms.validationChangePassword(updatePasswordUser2);
        expect(value.status).toEqual(0);
    });


    it('Test validate error empty password fields', () => {
        const updatePasswordUser3 = {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
        }
        const value = validateForms.validationChangePassword(updatePasswordUser3);
        expect(value.status).toEqual(0);
    });


    // UPLOAD IMAGE

    it('Test validate upload image', () => {
        const dataForm = new FormData();
        const file = new File(['file user'], 'example.png', { type: 'image/png' })
        dataForm.append('file', file);

        const value = validateForms.validationImage(dataForm);
        expect(value).toEqual({ "msg": "OK", "status": 1 });
    });


    it('Test validate upload pdf instead of image file', () => {
        const dataForm2 = new FormData();
        const file_pdf = new File(['file user'], 'example.pdf', { type: 'image/png' })
        dataForm2.append('file', file_pdf)

        const value = validateForms.validationImage(dataForm2);
        expect(value).toEqual({ "msg": "File format is not an image", "status": 0 });
    });

});