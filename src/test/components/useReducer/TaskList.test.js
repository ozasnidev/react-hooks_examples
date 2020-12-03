import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { TaskList } from '../../../components/08-useReducer/TaskList';
import { mockTask } from '../../fixtures/mockTask';

describe('TaskList component test', () => {
    const handleDeleteTask = jest.fn();
    const handleToggle = jest.fn();   
    const wrapper = shallow(<TaskList 
        taskState = {mockTask}
        handleDeleteTask = {handleDeleteTask}
        handleToggle = {handleToggle}
        /> );

    test('render', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('must to have 2 <TaskListItem/>', () => {
        expect(wrapper.find('TaskListItem').length).toBe(mockTask.length);
    });
    test('the inner <TaskListItem /> component have his props', () => {
        expect(wrapper.find('TaskListItem').at(0).prop('handleDeleteTask')).toEqual(expect.any(Function));
        expect(wrapper.find('TaskListItem').at(0).prop('handleToggle')).toEqual(expect.any(Function));
    });
});