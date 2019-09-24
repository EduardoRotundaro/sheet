import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from '../containers/pages/Main';

const RouterComponent = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Main}/>
            </Switch>
        </Router>
    );
}

export default RouterComponent;s