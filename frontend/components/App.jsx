import React from "react";
import {Route, Switch } from "react-router-dom"
import HomeContainer from "./home/home_container";
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <HomeContainer />
        
        <AuthRoute exact path="/login" component={LoginFormContainer} />
       <AuthRoute exact path="/signup" component={SignupFormContainer} />  
    </div>
);


export default App;