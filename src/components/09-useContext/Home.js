import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const Home = () => {
    const {user} = useContext(UserContext);
    return (
        <div>
            <h1>Home</h1>
            <hr />
            <pre>{JSON.stringify(user, null, 3)}</pre>
        </div>
    )
}
