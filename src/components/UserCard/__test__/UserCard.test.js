import React from 'react'
import { shallow } from 'enzyme'
import UserCard from '../';

describe('Test UserCard', () => {
    it('Test what?', () => {
        const userCard = shallow(<UserCard  />);
        expect(userCard).toMatchSnapshot()
    });
});