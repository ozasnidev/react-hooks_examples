import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('<HookApp /> test', () => {
    test('render', () => {
        const hookAppTestWrapper = shallow(<HookApp />);
        expect(hookAppTestWrapper).toMatchSnapshot();
    });
});