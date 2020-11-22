import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TaskAdd = ({ handleAddTask }) => {
    const [{ description }, handleInputChange, resetForm] = useForm({
        description: ''
    });
    const handleSubmit = (event) => {
        event.preventDefault();

        if(description.trim().length >= 1){
            handleAddTask({type: 'add', payload: {id: new Date().getTime(), desc: description, done: false}});
            resetForm();
        }
    };

    return (
        <>
            <div className="col-5">
                <h3>Agregar Task</h3>
                <hr/>
                <form
                    onSubmit={handleSubmit}
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
        </>
    )
}
