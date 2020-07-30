import React from 'react'
import { shallow } from 'enzyme';
import { LoginForm } from '../';
import RoundedInput from '../../../../components/RoundedInput';
import CustomButton from '../../../../components/CustomButton';


describe('test for Login Page', () => {
    const wrapper = shallow(<LoginForm />);
    it('should render correctly', () => {
        expect(JSON.stringify(wrapper)).toMatchSnapshot();
    });
});


describe('test for Login Page', () => {
    const wrapper = shallow(<LoginForm />);
    const instance = wrapper.instance();
    const loginClick = jest.spyOn(instance, 'handleSubmit');
    wrapper.update();
    instance.forceUpdate();
    it('it should render with check func', () => {
        wrapper.find('form').simulate('submit', { preventDefault () {} });
        expect(loginClick).toHaveBeenCalled();
    });
});


