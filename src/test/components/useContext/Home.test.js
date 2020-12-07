import React from 'react';
import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import { Home } from '../../../components/09-useContext/Home';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Home component test', () => {
    const wrapper = mount(
        <UserContext.Provider value={{ id:4 , name: 'Kakarotto'}}>
            <Home />
        </UserContext.Provider >
    );
    test('render', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
})
