import React from 'react'
import { shallow } from 'enzyme';
import { RegisterForm } from '../';

describe('test for Register Page', () => {
    const wrapper = shallow(<RegisterForm />);
    it('should render correctly', () => {
        expect(JSON.stringify(wrapper)).toMatchSnapshot();
    });
});

