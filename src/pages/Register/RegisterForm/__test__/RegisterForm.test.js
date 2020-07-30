import React from 'react'
import { shallow } from 'enzyme';
import { RegisterForm } from '../';

describe('test for Register Page', () => {
    const wrapper = shallow(<RegisterForm />);
    it('should render correctly', () => {
        expect(JSON.stringify(wrapper)).toMatchSnapshot();
    });
});

describe('test for Register Page', () => {
    const wrapper = shallow(<RegisterForm />);
    const instance = wrapper.instance();
    const registerClick = jest.spyOn(instance, 'handleSubmit');
    wrapper.update();
    instance.forceUpdate();
    it('it should render with check func', () => {
        wrapper.find('form').simulate('submit', { preventDefault () {} });
        expect(registerClick).toHaveBeenCalled();
    });
});
