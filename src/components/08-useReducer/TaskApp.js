import React, { useEffect, useReducer } from 'react'
import { taskReducer } from './taskReducer';
import { TaskList } from './TaskList';
import { TaskAdd } from './TaskAdd';
import './styles.css';

const init = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

export const TaskApp = () => {
    const [taskState, dispatch] = useReducer(taskReducer, [], init);
    const handleDeleteTask = (taskId) => { dispatch({ type: 'delete', payload: taskId}); };
    const handleToggle = (taskId) => { dispatch({type: 'toggle', payload: taskId}); }
    const handleAddTask = (newTask) => { dispatch(newTask); }
    useEffect( () => {
        localStorage.setItem('tasks', JSON.stringify(taskState));
    }, [taskState]);

    return (
        <>
            <h1>TaskApp ({taskState.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <h3>Task</h3>
                    <hr/>
                    <TaskList 
                        taskState = {taskState}
                        handleDeleteTask = {handleDeleteTask}
                        handleToggle = {handleToggle}
                    />
                </div>
                <TaskAdd
                    handleAddTask = {handleAddTask}
                />
            </div>
        </>
    )
}
