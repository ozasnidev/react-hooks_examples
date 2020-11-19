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
            <h1>TaskApp</h1>
            <hr/>

            <ol>
                <li>Seiya</li>
                <li>Hyoga</li>
                <li>Shiryu</li>
                <li>Shun</li>
                <li>Ikki</li>
                <li>Jabu</li>
                <li>Geki</li>
                <li>Ban</li>
                <li>Nachi</li>
                <li>Ichi</li>
            </ol>
        </div>
    )
}
