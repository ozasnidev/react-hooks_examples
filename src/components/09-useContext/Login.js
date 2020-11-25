import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const Login = () => {
    const {setUser} = useContext(UserContext);
    return (
        <div>
            <h1>Login</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={ () => setUser({
                    id: 7,
                    name: 'Juan'
                })}
            >
                Login
            </button>
        </div>
    )
}
