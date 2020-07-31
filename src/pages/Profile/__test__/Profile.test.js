import React from 'react'
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Profile from '../';

describe('test for Profile Page', () => {
    const wrapper = shallow(<Profile />);
    it('should render correctly', () => {
        expect(JSON.stringify(wrapper)).toMatchSnapshot();
    });
});