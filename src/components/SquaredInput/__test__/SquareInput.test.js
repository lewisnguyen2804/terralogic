import React from 'react'
import SquaredInput from '..';
import Enzyme from 'enzyme';

describe('Test SquaredInput', () => {
    it('Test change value on input', () => {
        const handleChange = jest.fn();
        const inputTest = Enzyme.mount(<SquaredInput handleChange={handleChange} value="Hello" />);
        inputTest.find("input").simulate('change');
        expect(handleChange).toHaveBeenCalled();
    });
});