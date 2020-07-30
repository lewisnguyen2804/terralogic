import React from 'react'
import { shallow } from 'enzyme'
import CustomButton from '..';

describe('Test CustomButton', () => {
    it('Test click event', () => {
        const loginFunc = jest.fn();
        const button = shallow((<CustomButton onClick={loginFunc} value="Login Button" />));
        button.find('input').simulate('click');
        expect(loginFunc.mock.calls.length).toEqual(1);
        expect(button.find("input").props().value).toEqual('Login Button');
    });
});