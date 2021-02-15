import React from 'react';
import { Link } from 'react-router-dom';
import LoggedOutComponent from "./logged_out_component/logged_out_component";


class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { currentUser, logout } = this.props;
        if (currentUser) {
            return (
                <hgroup className="header-group">
                    <h2 className="header-name">Hi, {currentUser.username}!</h2>
                    <button className="header-button" onClick={logout}>Log Out</button>
                    
                </hgroup>
            )} else {
            return (
                <LoggedOutComponent />
            )
        }
    }
}

export default Home;

