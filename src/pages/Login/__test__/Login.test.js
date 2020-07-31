import Login from '../'
import React from 'react'
import { shallow } from 'enzyme';

describe('test for Login Page', () => {
    const wrapper = shallow(<Login />);
    it('should render correctly', () => {
        expect(JSON.stringify(wrapper)).toMatchSnapshot();
    });
});