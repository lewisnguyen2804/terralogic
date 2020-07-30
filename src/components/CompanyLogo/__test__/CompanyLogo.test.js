import React from 'react'
import CompanyLogo from '..'
import { shallow } from 'enzyme';

describe('test for CompanyLogo component', () => {
    const wrapper = shallow(<CompanyLogo />);
    it('it should render', () => {
        expect(wrapper.find("img").hasClass("company-logo")).toBeTruthy()
    });
});
