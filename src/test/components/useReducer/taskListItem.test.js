import React from 'react';
import { shallow } from 'enzyme';
import { TaskListItem } from '../../../components/08-useReducer/taskListItem';
import { mockTask } from '../../fixtures/mockTask';
import '@testing-library/jest-dom';

describe('TaskListItem component test', ()=> {
    const handleDeleteTask = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(<TaskListItem task={mockTask[0]} index={0} handleDeleteTask = {handleDeleteTask} 
        handleToggle={handleToggle}/>);
    
    test('render', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('handleDeleteTask function call', () => {
        wrapper.find('button').simulate('click');
        expect(handleDeleteTask).toHaveBeenCalledWith(mockTask[0].id);
    });
    test('handleToggle function call', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(mockTask[0].id);
    });
    test('text p succesfull', () => {
        expect(wrapper.find('p').text().trim()).toBe(`1 ${mockTask[0].desc}`);
    });
    test('text p must have complete class if task.done = true', () => {
        const mockTaskObject = mockTask[0];
        mockTaskObject.done = true;
        const wrapper = shallow(<TaskListItem task={mockTaskObject} />);

        expect(wrapper.find('p').hasClass('complete')).toBeTruthy();
    });
});