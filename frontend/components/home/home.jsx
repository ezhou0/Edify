import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import LoggedOutComponent from "./logged_out_component/logged_out_component";


class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { currentUser, logout } = this.props;
        if (currentUser) {
            return (
                <Redirect to="/home" currentUser={currentUser} logout={logout} />
        )} else {
            return (
                <LoggedOutComponent />
            )
        }
    }
}

export default Home;

