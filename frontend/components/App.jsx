import React from "react";
import {Route, Switch, Redirect } from "react-router-dom"
import HomeContainer from "./home/home_container";
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtcRoute } from '../util/route_util';
import LoggedinContainer from "./home/logged_in_component/logged_in_container";
import ArtistIndexContainer from "./home/artists/artists_index_container"
import ArtistShowContainer from "./home/artists/artist_show_container"
import LoggedOutComponent from "./home/logged_out_component/logged_out_component";
import home from "./home/home";
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal/>
        <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} /> 
        <Route exact path="/" component={LoggedOutComponent}></Route>
        {/* <Route component={Modal} /> */}
        <ProtcRoute path="/home/" component={home} />
        <Route path="*">
            <Redirect to="/" />            
        </Route>

        </Switch> 
    </div>
);


export default App;