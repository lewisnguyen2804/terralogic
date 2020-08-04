
import React from 'react'
import { shallow } from 'enzyme';
import NotFound from '../';

describe('test for Login Page', () => {
    const wrapper = shallow(<NotFound />);
    const instance = wrapper.instance();
    const goBackFn = jest.spyOn(instance, 'goHome');
    wrapper.update();
    instance.forceUpdate();
    it('should render correctly', () => {
        const buttonTest = wrapper.find('CustomButton');
        buttonTest.at(0).simulate('click');
        // expect(JSON.stringify(wrapper)).toMatchSnapshot();
        expect(goBackFn).toHaveBeenCalled()
    });
});