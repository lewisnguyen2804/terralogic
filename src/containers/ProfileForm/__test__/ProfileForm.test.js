import React from 'react'
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import { ProfileForm } from '../';
import SquaredInput from '../../../components/SquaredInput';

describe('test for Profile Page', () => {
    const wrapper = shallow(<ProfileForm />);
    it('should render correctly', () => {
        expect(JSON.stringify(wrapper)).toMatchSnapshot();
    });
});

// handleChange function + onLogOutClick function
const props = {
    logout: jest.fn()
}

describe('test for Profile Form Page', () => {
    const wrapper = shallow(<ProfileForm {...props} />);
    const instance = wrapper.instance();
    const editProfileClick = jest.spyOn(instance, 'editProfile');
    const onLogOutClick = jest.spyOn(instance, 'onLogOutClick');
    wrapper.update();
    instance.forceUpdate();
    it('it should render with check func', () => {
        const inputTest = wrapper.find("CustomButton")
        inputTest.at(0).simulate('click');
        inputTest.at(1).simulate('click');
        expect(editProfileClick).toHaveBeenCalled();
        expect(onLogOutClick).toHaveBeenCalled();
    });
});

// componentDidMount
it('it should render with check func', async () => {
    const wrapper = shallow(<ProfileForm />);
    const instance = wrapper.instance();
    const func = jest.spyOn(instance, 'componentDidMount');
    instance.componentDidMount();
    expect(func).toHaveBeenCalled();
});

// onFileChange function
const event = {
    target: 
    {
        files: {
            "name":"hello.jpg"
        }
    }
};

describe('test for Profile Form Page', () => {
    const wrapper = shallow(<ProfileForm />);
    const instance = wrapper.instance();
    const onFileChange = jest.spyOn(instance, 'onFileChange');
    wrapper.update();
    instance.forceUpdate();
    it('it should render with check func', () => {
        const inputTest = wrapper.find("input")
        inputTest.simulate('change', event);
        expect(onFileChange).toHaveBeenCalled();
    });
});