import React from 'react'
import { shallow } from 'enzyme';
import { RegisterForm } from '../';
import RoundedInput from '../../../components/RoundedInput';
import Enzyme from 'enzyme';
import CustomButton from '../../../components/CustomButton';

describe('test for Register Page', () => {
    const wrapper = shallow(<RegisterForm />);
    it('should render correctly', () => {
        expect(JSON.stringify(wrapper)).toMatchSnapshot();
    });
});

// handleSubmit function
describe('test for Register Page', () => {
    const wrapper = shallow(<RegisterForm />);
    const instance = wrapper.instance();
    const registerClick = jest.spyOn(instance, 'handleSubmit');
    wrapper.update();
    instance.forceUpdate();
    it('it should render with check func', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(registerClick).toHaveBeenCalled();
    });
});


// handleChange function
describe('test for Register Page', () => {
    const wrapper = shallow(<RegisterForm />);
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


// onShowPasswordClick/onShowConfirmPasswordClick function
describe('test for RegisterForm Page', () => {
    const wrapper = shallow(<RegisterForm />);
    const instance = wrapper.instance();
    const onShowPasswordClick = jest.spyOn(instance, 'onShowPasswordClick');
    const onShowConfirmPasswordClick = jest.spyOn(instance, 'onShowConfirmPasswordClick');
    wrapper.update();
    instance.forceUpdate();
    it('it should render with check func', () => {
        const clickTest = Enzyme.mount(<RoundedInput isPassword="true" showPwdOnClick={onShowPasswordClick} />);
        clickTest.find('img').at(1).simulate('click');
        expect(onShowPasswordClick).toHaveBeenCalled();

        const clickTest1 = Enzyme.mount(<RoundedInput isPassword="true" showPwdOnClick={onShowConfirmPasswordClick} />);
        clickTest1.find('img').at(1).simulate('click');
        expect(onShowConfirmPasswordClick).toHaveBeenCalled();
    });
});


// goBack function
const props = {
    history:
    {
        goBack: jest.fn()
    }
}

describe('test for Register Page', () => {
    const wrapper = shallow(<RegisterForm {...props} />);
    const instance = wrapper.instance();
    const goBackClick = jest.spyOn(instance, 'goBack');
    wrapper.update();
    instance.forceUpdate();
    it('it should render with check func', () => {
        const inputTest = Enzyme.mount(<CustomButton onClick={goBackClick} />);
        expect(inputTest).toMatchSnapshot();
        inputTest.find('input').simulate('click');
        expect(inputTest).toHaveBeenCalled();
    });
});