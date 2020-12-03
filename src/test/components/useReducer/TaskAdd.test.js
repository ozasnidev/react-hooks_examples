import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom'
import { TaskAdd } from '../../../components/08-useReducer/TaskAdd';

describe('TaskAdd component test', () => {
    const handleAddTask = jest.fn();
    const wrapper = shallow(<TaskAdd handleAddTask={handleAddTask} />);

    test('render', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('handleAddTask not called', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});

        expect(handleAddTask).toHaveBeenCalledTimes(0);
    });
    test('handleAddTask call', () => {
        const value = 'Aprender React.js';
        wrapper.find('input').simulate('change', { target: { value, name: 'description' } });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});

        expect(handleAddTask).toHaveBeenCalledTimes(1); //method call
        expect(handleAddTask).toHaveBeenCalledWith({    //method need a action Object as parameter
                type: 'add',
                payload: {
                    id: expect.any(Number), 
                    desc: value, 
                    done: false
                }
            }
        );
        expect(wrapper.find('input').prop('value')).toBe(''); //resetForm input text method test
    });
});
