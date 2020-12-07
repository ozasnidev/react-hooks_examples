import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { TaskApp } from '../../../components/08-useReducer/TaskApp';
import { mockTask } from '../../fixtures/mockTask';
import { act } from '@testing-library/react';

describe('TaskApp component', () => {
    const wrapper = mount(<TaskApp />);
    Storage.prototype.setItem = jest.fn(() => {});

    test('render', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('add a Task', () => {  
        act(() => { 
            wrapper.find('TaskAdd').prop('handleAddTask')({type: 'add', payload:mockTask[0]});
            wrapper.find('TaskAdd').prop('handleAddTask')({type: 'add', payload:mockTask[1]});
        });
        expect(wrapper.find('h1').text().trim()).toBe('TaskApp (2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    });
});

