import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Chat } from '../components/Chat/Chat';
import { Join } from '../components/Join/Join';

export const ChatRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/chat' component={Chat} exact />
                    <Route path='/' component={Join} exact />
                    <Redirect to={'/'} />
                </Switch>
            </div>
        </Router>
    );
};
