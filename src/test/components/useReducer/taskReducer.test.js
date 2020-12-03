import { taskReducer } from '../../../components/08-useReducer/taskReducer';
import { mockTask } from '../../fixtures/mockTask';

describe('taskReducer test', ()=> {
    test('return a state by default', () => {
        const state = taskReducer( mockTask, {});
        expect(state).toEqual(mockTask);
    });
    test('add a task', () => {
        const mockAction = {
            type: 'add',
            payload: {
                id: 3,
                desc: 'aprender Flutter',
                done: false
            }
        }
        const state = taskReducer( mockTask, mockAction );
        expect(state.length).toBe(3);
    });
    test('delete a task', () => {
        const state = taskReducer( mockTask, {type: 'delete', payload: 2});
        expect(state.length).toBe(1);
        expect(state).toEqual([mockTask[0]]);
    });
    test('toggle a task', () => {
        const mockAction = { type: 'toggle', payload: 2 }
        const state = taskReducer( mockTask, mockAction );
        expect(state[0].done).toBeFalsy();
        expect(state[0]).toEqual(mockTask[0]);
        expect(state[1].done).toBeTruthy();
    });
});

