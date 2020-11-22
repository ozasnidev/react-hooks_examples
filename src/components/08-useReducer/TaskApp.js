import React, { useEffect, useReducer } from 'react'
import { taskReducer } from './taskReducer';
import { useForm } from '../../hooks/useForm';
import './styles.css';
import { TaskList } from './TaskList';

const init = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

export const TaskApp = () => {
    const [taskState, dispatch] = useReducer(taskReducer, [], init);
    const [{ description }, handleInputChange, resetForm] = useForm({
        description: ''
    });

    useEffect( () => {
        localStorage.setItem('tasks', JSON.stringify(taskState));
    }, [taskState]);

    const handleDeleteTask = (taskId) => { dispatch({ type: 'delete', payload: taskId}); };
    const handleToggle = (taskId) => { dispatch({type: 'toggle', payload: taskId}); }
    const handleAddTask = (event) => {
        event.preventDefault();

        if(description.trim().length >= 1){
            dispatch({type: 'add', payload: {id: new Date().getTime(), desc: description, done: false}});
            resetForm();
        }
    }

    return (
        <div>
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
                <div className="col-5">
                    <h3>Agregar Task</h3>
                    <hr/>
                    <form
                        onSubmit={handleAddTask}
                    >
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Task"
                            autoComplete="off"
                            value={ description }
                            onChange={ handleInputChange }
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-success mt-2 btn-block"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
