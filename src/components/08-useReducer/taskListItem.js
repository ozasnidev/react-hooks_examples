import React from 'react'

export const TaskListItem = ({task, index, handleDeleteTask, handleToggle}) => {
    return (
        <li
            key={task.id}
            className="list-group-item list-group-item-warning m-1"
        >
            <p  
                className={`${task.done && 'complete'}`}
                onClick={() => handleToggle(task.id)}
            >
                {`${index + 1} ${task.desc}`}
            </p>
            <button 
                className="btn btn-outline-danger"
                onClick={() => handleDeleteTask(task.id)}
            >
                Borrar
            </button>
        </li>
    )
}
