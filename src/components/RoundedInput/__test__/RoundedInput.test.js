import React from 'react'
import RoundedInput from '..';
import Enzyme from 'enzyme';

describe('Test RoundedInput', () => {
    it('Test change value on input', () => {
        const handleChange = jest.fn();
        const inputTest = Enzyme.mount(<RoundedInput handleChange={handleChange} value="Hello" />);
        inputTest.find("input").simulate('change');
        expect(handleChange).toHaveBeenCalled();
    });
});