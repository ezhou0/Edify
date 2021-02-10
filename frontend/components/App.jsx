import React from "react";
import HomeContainer from "./home/home";
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
        <h1>Edify</h1>
        <HomeContainer />
        </header>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;