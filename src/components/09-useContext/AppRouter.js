import React from 'react';
import { Navbar } from './Navbar';
import { About } from './About';
import { Login } from './Login';
import { Home } from './Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

export const AppRouter = () => {
    return (
        <Router >
            <>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/login" component={ Login } />
                    <Route exact path="/about" component={ About } />
                    <Redirect to="/" />
                </Switch>
            </>
        </Router>
    )
}
