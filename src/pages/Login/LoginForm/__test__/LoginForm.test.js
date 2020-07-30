import React from 'react'
import { shallow } from 'enzyme';
import { LoginForm } from '../';

describe('test for Login Page', () => {
    const wrapper = shallow(<LoginForm />);
    it('should render correctly', () => {
        expect(JSON.stringify(wrapper)).toMatchSnapshot();
    });
});


describe('test for Login Page', () => {
    const wrapper = shallow(<LoginForm />);
    const instance = wrapper.instance();
    const handleSubmitClick = jest.spyOn(instance, 'handleSubmit');
    wrapper.update();
    instance.forceUpdate();
    it('it should render with check func', () => {
        const loginButton = wrapper.find(".button-type-1");
        loginButton.simulate("click");
        expect(handleSubmitClick).toHaveBeenCalled();
    });
});


