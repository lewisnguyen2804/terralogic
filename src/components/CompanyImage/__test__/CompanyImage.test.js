import React from 'react'
import { shallow } from 'enzyme'
import CompanyImage from '..'

describe('test for CompanyImage component', () => {
    const wrapper = shallow(<CompanyImage />);
    it('it should render', () => {
        expect(wrapper.find("img").hasClass("company-image")).toBeTruthy()
    });
});
