import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Login } from '../../../components/09-useContext/Login';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Login component test', () => {
    const setUser = jest.fn();
    const wrapper = mount(
        <UserContext.Provider value={{ setUser }}>
            <Login />
        </UserContext.Provider>
            
    );
        
    test('render', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('setUser function call', () => {
        wrapper.find('button').simulate('click');
        expect(setUser).toHaveBeenCalledWith({ id: 7, name: 'Juan' });
    });
})
