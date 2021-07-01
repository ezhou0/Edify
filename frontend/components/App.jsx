import React from "react";
import {Route, Switch, Redirect } from "react-router-dom"
import HomeContainer from "./home/home_container";
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtcRoute } from '../util/route_util';
import LoggedinContainer from "./logged_in_component/logged_in_container";
import ArtistIndexContainer from "./home/music/artists/artist_index_container";
import ArtistShowContainer from "./home/music/artists/artist_show_container";
import AlbumShowContainer from './home/music/albums/album_show_container';
// import SearchContainer from '../components/search/search_container';

import SplashComponent from "./splash/splash_component";

import Modal from './modal/modal';


const App = () => (
    <div>
        <LoggedinContainer/>
        <Modal/>
        <Switch> 
        <AuthRoute exact path='/' component = {SplashComponent}/> 
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />  
        <ProtcRoute path='/home/' component={ArtistIndexContainer} />
        
        
       <ProtcRoute exact path = "/artists/:artistId" component={ArtistShowContainer}/>
       
       <ProtcRoute exact path = '/albums/:albumId' component={AlbumShowContainer}/> 
            {/*
         <ProtcRoute path="/searches/:searchTerm" component={SearchContainer} />  */}
        <Route path="*">
            <Redirect to="/" />            
        </Route>  

        </Switch>
    </div>
);


export default App;

