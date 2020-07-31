import React from 'react'
import { shallow } from 'enzyme'
import LoadingScreen from '../';

describe('Test LoadingScreen', () => {
    it('Test what?', () => {
        const loadingScreen = shallow(<LoadingScreen  />);
        expect(loadingScreen).toMatchSnapshot()
    });
});