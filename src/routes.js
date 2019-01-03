import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Learn from './components/Learn/Learn';
import LearnDidMount from './components/LearnDidMount/LearnDidMount';
import Update from './components/UpdatePhase/Update';

//import HOC from './components/HOC/props-from-hoc';

const Routes =()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/home' component={Home} />
            <Route path='/learn' component={Learn} />
            <Route path='/learndidmount' component={LearnDidMount} />
            <Route path='/update' component={Update} />
            
            <Route path='/*' component={NotFound} /> 
        </Switch>
    </BrowserRouter>
);

export default Routes;
