import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../components/04-useRef/RealExampleRef';

describe('RealExamplerRef component test', ()=>{
    const wrapper = shallow(<RealExampleRef />);
    test('render', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBeFalsy();
    });
    test('MultipleCustomHooks component render', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBeTruthy();
    });    
});