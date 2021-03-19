import React from "react";
import {Route, Switch, Redirect } from "react-router-dom"
import HomeContainer from "./home/home_container";
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtcRoute } from '../util/route_util';
import LoggedinContainer from "./home/logged_in_component/logged_in_container";
import ArtistIndexContainer from "./home/artists/artists_index_container"
import ArtistShowContainer from "./home/artists/artist_show_container"

const App = () => (
    <div>
        <Modal />
        <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} /> 
        <Route exact path="/" component={HomeContainer}></Route>
        <ProtcRoute path="/home/" component={LoggedinContainer} />
        <Route path="*">
            <Redirect to="/" />            
        </Route>

        </Switch> 
    </div>
);


export default App;