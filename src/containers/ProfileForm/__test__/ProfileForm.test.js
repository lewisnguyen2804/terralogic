import React from 'react'
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import { ProfileForm } from '../';

describe('test for Profile Page', () => {
    const wrapper = shallow(<ProfileForm />);
    it('should render correctly', () => {
        expect(JSON.stringify(wrapper)).toMatchSnapshot();
    });
});

// handleSubmit function
// describe('test for Profile Page', () => {
    // const wrapper = shallow(<RegisterForm />);
    // const instance = wrapper.instance();
    // const registerClick = jest.spyOn(instance, 'handleSubmit');
    // wrapper.update();
    // instance.forceUpdate();
    // it('it should render with check func', () => {
    //     wrapper.find('form').simulate('submit', { preventDefault() { } });
    //     expect(registerClick).toHaveBeenCalled();
    // });
// });
