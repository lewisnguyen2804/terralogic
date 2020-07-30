import React from 'react'
import { shallow } from 'enzyme'
import RoundedInput from '..';

describe('Test RoundedInput', () => {
    it('Test change value on input', () => {
        const handleChange = jest.fn();
        const inputTest = shallow(<RoundedInput onChange={handleChange} />);
        inputTest.find("input").simulate('change', { target: { value: 'Hello Tuan' } });
        // expect(handleChange).toHaveBeenCalled();
        // expect(handleChange.mock.calls.length).toEqual(1);
        // expect(inputTest.find("input").props().value).toBe('Hello Tuan');
    });
});