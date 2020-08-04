import { userService } from '../user.service';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ii1NQ1FaU0tlTS15TnphQVNSaHJvIiwiYXZhdGFyIjoiaHR0cHM6Ly9saW5rLnRvLmltYWdlIiwiZW1haWwiOiJoYWkudHJhbkB0ZXJyYWxvZ2ljLmNvbSIsIm5hbWUiOiJIYWkgVHJhbiBUZXJyYWxvZ2ljIiwicGhvbmUiOiIxMjM0NTY3ODkiLCJkaXNwbGF5TmFtZSI6IkhhaSBUcmFuIFRlcnJhbG9naWMiLCJpYXQiOjE1OTU0MDM0ODF9.NetRY_Pu_eAxsbNuapa8Wc2MdP62r5EFQd2IDg-GGew';

describe('Test Services', () => {
    // GET PROFILE
    // const userLoggedIn = {
    //     msg: "Login succeeded.",
    //     token: 'error',
    // }

    // it('Test JWT decode', async () => {
    //     const value = await userService.getProfile(userLoggedIn);
    //     expect(value).toHaveBeenCalled()
    // });

    // LOGIN
    const userLogin = {
        email: "ngoctuanitpy@gmail.com",
        password: "Abc123!!!"
    }

    it('Test login', async () => {
        const value = await userService.login(userLogin);
        expect(value.status).toEqual(1);
    });

    const userLoginError = {
        email: "ngoctuanitpy@gmail.com",
        password: "Abc123!!!ERROR"
    }

    it('Test login error', async () => {
        const value = await userService.login(userLoginError);
        expect(value.status).toEqual(0);
    });

    // REGISTER
    const userRegister = {
        email: 'newemail@gmail.com', 
        password: 'Abc123!!!',
        confirmPassword: 'Abc123!!!',
        name: 'Tuan Nguyen',
        phone: '0392938232'
    }

    it('Test register', async () => {
        const value = await userService.register(userRegister);
        expect(value.status).toEqual(0);
    });

    const userRegisterError = {
        email: 'abc@aaaa.com',
        password: 'Abc!!',
        confirmPassword: 'Ab!!!',
        name: 'Tuan Nguyen',
        phone: '0392938232'
    }

    it('Test register error', async () => {
        const value = await userService.register(userRegisterError);
        expect(value.status).toEqual(0);
    });

    // UPDATE INFORMATION
    const updateInformationUser = {
        email: 'hahahahah@gmail.com',
        name: 'Test',
        phone: '0392938232',
        myAvatar: 'nothing here'
    }

    it('Test validate update information form', async () => {
        const value = await userService.updateInformation(updateInformationUser, token);
        expect(value.status).toEqual(1);
    });

    const updateInformationUserError = {
        email: 'hahahahahgmail.com',
        name: 'Test',
        phone: '0392938232',
        myAvatar: 'nothing here'
    }

    it('Test validate update information form with error', async () => {
        const value = await userService.updateInformation(updateInformationUserError, token);
        expect(value.status).toEqual(0);
    });

    // CHANGE PASSWORD
    const changePasswordUserError = {
        newPassword: 'test',
        currentPassword: 'test1111',
        confirmPassword: 'test',
    }
    it('Test update password with error', async () => {
        const value = await userService.changePassword(changePasswordUserError, token);
        expect(value.status).toEqual(0);
    });


});
