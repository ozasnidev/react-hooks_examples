import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <h3 className="navbar-brand">useContext</h3>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/">Home</NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/login">Login</NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/about">About</NavLink>
                </div>
            </div>
        </nav>
    )
}
