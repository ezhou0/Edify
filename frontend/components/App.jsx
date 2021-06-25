import React from "react";
import {Route, Switch, Redirect } from "react-router-dom"
import HomeContainer from "./home/home_container";
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtcRoute } from '../util/route_util';
import LoggedinContainer from "./logged_in_component/logged_in_container";
import ArtistIndexContainer from "./home/music/artists/artist_index_container"
// import ArtistShowContainer from "./home/music/artists/artist_show_container";
// import AlbumShowContainer from './home/music/albums/album_show_container';
// import SearchContainer from '../components/search/search_container';

import SplashComponent from "./splash/splash_component";
import home from "./home/home";
import Modal from './modal/modal';
import LoggedInComponent from "./logged_in_component/logged_in_component";
import home_container from "./home/home_container";
import ArtistIndexComponent from "./home/music/artists/artist_index_component";


const App = () => (
    <div>
        <LoggedinContainer/>
        <Modal/>
        <Switch> 
        <AuthRoute exact path='/' component = {SplashComponent}/> 
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />  
        <ProtcRoute path='/home/' component={ArtistIndexContainer} />
        
        
       {/* <ProtcRoute path = "/artists/:artistId" component={ArtistShowContainer}/>
       <ProtcRoute path = '/albums/:albumId' component={AlbumShowContainer}/>  
    <ProtcRoute path="/home/" component={ArtistIndexContainer} /> }
         <ProtcRoute path="/searches/:searchTerm" component={SearchContainer} />
        <Route path="*">
            <Redirect to="/" />            
        </Route>  */}

        </Switch>
    </div>
);


export default App;

