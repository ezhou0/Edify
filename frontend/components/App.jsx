import React from "react";
import {Route, Switch, Redirect } from "react-router-dom"
import HomeContainer from "./home/home_container";
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} /> 
        <Route exact path="/" component={HomeContainer}></Route>
        <Route path="*">
            <Redirect to="/" />            
        </Route>
        </Switch> 
    </div>
);


export default App;