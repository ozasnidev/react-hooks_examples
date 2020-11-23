import React from 'react';
import { About } from './About';
import { Login } from './Login';
import { Home } from './Home';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

export const AppRouter = () => {
    return (
        <Router >
            <>

                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/login" component={ Login } />
                    <Route exact path="/about" component={ About } />
                </Switch>
            </>
        </Router>
    )
}
