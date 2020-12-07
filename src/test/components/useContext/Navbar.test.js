import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { Navbar } from '../../../components/09-useContext/Navbar';

describe('Navbar component test', () => {
    const wrapper = shallow(<Navbar />);
    test('render', () => {
        expect(wrapper).toMatchSnapshot();
    });
});