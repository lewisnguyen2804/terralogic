import { userService } from '../user.service';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ii1NQ1FaU0tlTS15TnphQVNSaHJvIiwiYXZhdGFyIjoiaHR0cHM6Ly9saW5rLnRvLmltYWdlIiwiZW1haWwiOiJoYWkudHJhbkB0ZXJyYWxvZ2ljLmNvbSIsIm5hbWUiOiJIYWkgVHJhbiBUZXJyYWxvZ2ljIiwicGhvbmUiOiIxMjM0NTY3ODkiLCJkaXNwbGF5TmFtZSI6IkhhaSBUcmFuIFRlcnJhbG9naWMiLCJpYXQiOjE1OTU0MDM0ODF9.NetRY_Pu_eAxsbNuapa8Wc2MdP62r5EFQd2IDg-GGew';
jest.setTimeout(30000);

describe('Test Services', () => {
    // LOGIN

    it('Test login', async () => {
        const userLogin = {
            email: "ngoctuanitpy@gmail.com",
            password: "Abc123!!!"
        }
        const value = await userService.login(userLogin);
        expect(value.status).toEqual(1);
    });

    it('Test login error', async () => {
        const userLoginError = {
            email: "ngoctuanitpy@gmail.com",
            password: "Abc123!!!ERROR"
        }
        const value = await userService.login(userLoginError);
        expect(value.status).toEqual(0);
    });

    it('Test login empty', async () => {
        const userLoginEmpty = {
            email: "",
            password: ""
        }
        const value = await userService.login(userLoginEmpty);
        expect(value.status).toEqual(0);
    });

    // REGISTER

    it('Test register', async () => {
        const userRegister = {
            email: 'newemail@gmail.com',
            password: 'Abc123!!!',
            confirmPassword: 'Abc123!!!',
            name: 'Tuan Nguyen',
            phone: '0392938232'
        }
        const value = await userService.register(userRegister);
        expect(value.status).toEqual(0);
    });

    it('Test register error', async () => {
        const userRegisterError = {
            email: 'abc@aaaa.com',
            password: 'Abc!!',
            confirmPassword: 'Ab!!!',
            name: 'Tuan Nguyen',
            phone: '0392938232'
        }
        const value = await userService.register(userRegisterError);
        expect(value.status).toEqual(0);
    });


    it('Test register empty some fields', async () => {
        const userRegisterEmpty = {
            email: 'abc@aaaa.com',
            password: 'Abc!!',
            confirmPassword: 'Ab!!!',
            name: '',
            phone: ''
        }
        const value = await userService.register(userRegisterEmpty);
        expect(value.status).toEqual(0);
    });


    // UPDATE INFORMATION
    it('Test validate update information form', async () => {
        const updateInformationUser = {
            email: 'hahahahah@gmail.com',
            name: 'Test',
            phone: '0392938232',
            myAvatar: 'nothing here'
        }
        const value = await userService.updateInformation(updateInformationUser, token);
        expect(value.status).toEqual(1);
    });

    it('Test validate update information form with error', async () => {
        const updateInformationUserError = {
            email: 'hahahahahgmail.com',
            name: 'Test',
            phone: '0392938232',
            myAvatar: 'nothing here'
        }
        const value = await userService.updateInformation(updateInformationUserError, token);
        expect(value.status).toEqual(0);
    });

    // CHANGE PASSWORD
    it('Test update password with error', async () => {
        const changePasswordUserError = {
            newPassword: 'test',
            currentPassword: 'test1111',
            confirmPassword: 'test',
        }
        const value = await userService.changePassword(changePasswordUserError, token);
        expect(value.status).toEqual(0);
    });

    it('Test update password with error', async () => {
        const changePasswordUserError1 = {
            newPassword: 'UserABC1234!!',
            currentPassword: 'UserABC1234!',
            confirmPassword: 'UserABC1234!!',
        }
        const value = await userService.changePassword(changePasswordUserError1, token);
        expect(value.status).toEqual(0);
    });

    // LOGOUT
    it('Test logout', async () => {
        const value = await userService.logout();
        expect(value).toEqual(true);
    });

    // UPLOAD IMAGE
    it('Test validate upload image (wrong format)', async () => {
        const dataForm = new FormData();
        const file = new File(['file user'], 'example.pdf', { type: 'image/png' })
        dataForm.append('file', file)
        const value = await userService.uploadImage(dataForm, token);
        expect(value.status).toEqual(0);
    });

});
