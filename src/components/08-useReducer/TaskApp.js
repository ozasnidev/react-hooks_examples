import React, { useReducer } from 'react'
import { taskReducer } from './taskReducer';
import './styles.css';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}];

export const TaskApp = () => {
    const [taskState, dispatch] = useReducer(taskReducer, initialState);
    
    const handleAddTask = (event) => {
        event.preventDefault();

        const newTask = {
            id: new Date().getTime(),
            desc: 'Aprender React a fondo',
            done: false
        };

        const taskAction = {
            type:'add',
            payload: newTask
        };

        dispatch(taskAction);
    }

    return (
        <div>
            <h1>TaskApp ({taskState.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <h3>Task</h3>
                    <hr/>
                    <ul className="list-group list-group-flush">
                        {
                            taskState.map(task => (
                                <li
                                    key={task.id}
                                    className="list-group-item list-group-item-warning m-1"
                                >
                                    <p className="text-center">{task.desc}</p>
                                    <button className="btn btn-outline-danger">Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
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
