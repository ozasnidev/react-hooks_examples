import React, { useReducer } from 'react'
import './styles.css'
import { taskReducer } from './taskReducer';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}];

export const TaskApp = () => {
    const [taskState] = useReducer(taskReducer, initialState);
    console.log(taskState);
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
                                    className="list-group-item list-group-item-warning"
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
                    <form>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Task"
                            autoComplete="off"
                        />
                        <button
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
