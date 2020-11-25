import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const About = () => {
    const {user, setUser } = useContext(UserContext);
    const handleReset = () => {
        setUser({});
    }
    return (
        <div>
            <h1>About</h1>
            <hr />
            <pre>{ JSON.stringify(user, null, 3) }</pre>
            <button
                className="btn btn-danger"
                onClick = { handleReset }
            >
                Logout
            </button>
        </div>
    )
}
