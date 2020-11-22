import React from 'react'
import { TaskListItem } from './taskListItem'

export const TaskList = ({taskState, handleDeleteTask, handleToggle}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                taskState.map((task, index  ) => (
                    <TaskListItem 
                        key = {task.id}
                        task = {task}   
                        index = {index}
                        handleDeleteTask = {handleDeleteTask}
                        handleToggle = {handleToggle}
                    />
                ))
            }
        </ul>
    )
}
