import React from 'react'
import { shallow } from 'enzyme'
import CustomCheckBox from '..';

describe('Test CustomCheckbox', () => {
    it('Test if a function is called when change checkbox', () => {
        const onChange = jest.fn();
        const checkBox = shallyow((<CustomCheckBox onChange={onChange} />));
        checkBox.find("input").simulate('change', { target: { checked: true } });
        expect(onChange.mock.calls.length).toEqual(1);
    });
});