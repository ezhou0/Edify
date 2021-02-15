import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div className = 'home-container'>
            <div className = 'navbar'>
                <nav className='login-signup'>
                    <div className = 'logo'>logo</div>
                <div className = 'nav-links'>
                        <div className = 'nav-link-button'><Link to='./login'>Log in </Link></div>
                        <br/>
                        <div className = 'nav-link-button'> <Link to="/signup">Sign up</Link></div> 
                    </div>
                </nav>
            </div>

            <div className = 'splash-content'>
                <h1 className = 'splash-welcome'>Listening is everything</h1>
                <h4 className='splash-sub'>Millions of songs and podcasts. No credit card needed.</h4> 
                <div className='splash-button'><Link to='./signup'>GET EDIFY FREE</Link></div>
            </div>
           
        
        </div>


    )
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );
    return currentUser ? personalGreeting() : sessionLinks();

};
export default Home;