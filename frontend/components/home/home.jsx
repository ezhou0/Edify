import React from 'react';
import { Link, Redirect, Route} from 'react-router-dom';
import LoggedInContainer from './logged_in_component/logged_in_container';
import LoggedInComponent from './logged_in_component/logged_in_component';
import LoggedOutComponent from "./logged_out_component/logged_out_component";


// class Home extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     // render(){
//     //     const { currentUser, logout } = this.props;
//     //     if (currentUser) {
//     //         return (
//     //             <Redirect to="/home" currentUser={currentUser} logout={logout} />
//     //     )} else {
//     //         return (
//     //             <LoggedOutComponent />
//     //         )
//     //     }
//     // }

   
// }

// export default Home;

export default() =>(
    <div className='main-app-container'>
        <Route component={LoggedInContainer} />
    </div>
);
