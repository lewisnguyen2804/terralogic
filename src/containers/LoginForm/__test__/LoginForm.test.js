import React from 'react'
import { shallow } from 'enzyme';
import { LoginForm } from '../';
import RoundedInput from '../../../components/RoundedInput';
import Enzyme from 'enzyme';
import CustomCheckBox from '../../../components/CustomCheckBox';

describe('test for Login Page', () => {
    const wrapper = shallow(<LoginForm />);
    it('should render correctly', () => {
        expect(JSON.stringify(wrapper)).toMatchSnapshot();
    });
});

// handleSubmit function
describe('test for Login Page', () => {
    const wrapper = shallow(<LoginForm />);
    const instance = wrapper.instance();
    const loginClick = jest.spyOn(instance, 'handleSubmit');
    wrapper.update();
    instance.forceUpdate();
    it('it should render with check func', () => {
        wrapper.find('form').simulate('submit', { preventDefault () {} });
        expect(loginClick).toHaveBeenCalled();
    });
});

// handleChange function
describe('test for Login Page', () => {
    const wrapper = shallow(<LoginForm />);
    const instance = wrapper.instance();
    const handleChangeClick = jest.spyOn(instance, 'handleChange');
    wrapper.update();
    instance.forceUpdate();
    it('it should render with check func', () => {
        const inputTest = Enzyme.mount(<RoundedInput handleChange={handleChangeClick} value="custom value" />);
        inputTest.find('input').simulate('change');
        expect(handleChangeClick).toHaveBeenCalled();
    });
});

// onShowPasswordClick function
describe('test for Login Page', () => {
    const wrapper = shallow(<LoginForm />);
    const instance = wrapper.instance();
    const onShowPasswordClick = jest.spyOn(instance, 'onShowPasswordClick');
    wrapper.update();
    instance.forceUpdate();
    it('it should render with check func', () => {
        const clickTest = Enzyme.mount(<RoundedInput isPassword="true" showPwdOnClick={onShowPasswordClick} />);
        clickTest.find('img').at(1).simulate('click');
        expect(onShowPasswordClick).toHaveBeenCalled();
    });
});

// rememberPasswordOnChange function
describe('test for Login Page', () => {
    const wrapper = shallow(<LoginForm />);
    const instance = wrapper.instance();
    const rememberPasswordOnChange = jest.spyOn(instance, 'rememberPasswordOnChange');
    wrapper.update();
    instance.forceUpdate();
    it('it should render with check func', () => {
        const clickTest = Enzyme.mount(<CustomCheckBox onChange={rememberPasswordOnChange} />);
        clickTest.find('input').simulate('change');
        expect(rememberPasswordOnChange).toHaveBeenCalled();
    });
});


