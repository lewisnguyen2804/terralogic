import React from 'react'
import { shallow } from 'enzyme'
import PrivateRoute from '..';

describe('Test PrivateRoute', () => {
    it('Test what?', () => {
        const privateRoute = shallow(<PrivateRoute />);
        expect(privateRoute).toMatchSnapshot()
    });
});