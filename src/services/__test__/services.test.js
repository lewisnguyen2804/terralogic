import React from 'react'
import { shallow } from 'enzyme'
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
    const loginUser = {
        email: 'ngoctuanitpy@gmail.com',
        password: 'Abc123!!!'
    }
    it('Test validate login form', () => {
        const value = validateForms.validationLogin(loginUser);
        expect(value).toEqual({ "msg": "OK", "status": 1 });
    });

    // REGISTER FORM
    const registerUser = {
        email: 'ngoctuanitpy@gmail.com',
        password: 'Abc123!!!',
        confirmPassword: 'Abc123!!!',
        name: 'Tuan Nguyen',
        phone: '0392938232'
    }

    it('Test validate register form', () => {
        const value = validateForms.validationRegister(registerUser);
        expect(value).toEqual({ "msg": "OK", "status": 1 });
    });

    // PROFILE FORM
    const updateInformationUser = {
        email: 'ngoctuanitpy@gmail.com',
        name: 'Tuan Nguyen',
        phone: '0392938232'
    }

    it('Test validate update information form', () => {
        const value = validateForms.validationProfileInfo(updateInformationUser);
        expect(value).toEqual({ "msg": "OK", "status": 1 });
    });

    const updatePasswordUser = {
        currentPassword: 'Abc123!!!',
        newPassword: 'Edf123!!!',
        confirmPassword: 'Edf123!!!',
    }

    it('Test validate update information form', () => {
        const value = validateForms.validationChangePassword(updatePasswordUser);
        expect(value).toEqual({ "msg": "OK", "status": 1 });
    });

    // UPLOAD IMAGE
    const dataForm = new FormData();
    const file = new File(['file user'], 'example.png', {type: 'image/png'})
    dataForm.append('file', file)

    it('Test validate upload image', () => {
        const value = validateForms.validationImage(dataForm);
        expect(value).toEqual({ "msg": "OK", "status": 1 });
    });

    const dataForm2 = new FormData();
    const file_pdf = new File(['file user'], 'example.pdf', {type: 'image/png'})
    dataForm2.append('file', file_pdf)

    it('Test validate upload pdf instead of image file', () => {
        const value = validateForms.validationImage(dataForm2);
        expect(value).toEqual({ "msg": "File format is not an image", "status": 0 });
    });

});