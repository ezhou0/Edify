import React from "react"
import { Link, Redirect, Route } from "react-router-dom"

class LoggedOutComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='home-container'>
                <div className='navbar'>
                   
                        <div className='home-logo-div'>
                            <img className="home-logo" src={window.edifyURL} alt="Edify Logo" /> 
                            <div className='logo-text'>dify</div>
                        </div>
                        <div className='nav-links'>
                            <div className='nav-link-button'><Link to='./login'>Log in </Link></div>
                            <br />
                            <div className='nav-link-button'> <Link to="/signup">Sign up</Link></div>
                        </div>
                   
                </div>

                <div className='splash-content'>
                    <h1 className='splash-welcome'>Listening is everything</h1>
                    <h4 className='splash-sub'>Millions of songs and podcasts. No credit card needed.</h4>
                    <div className='splash-button'><Link to='./signup'>GET EDIFY FREE</Link></div>
                </div>


            </div>
        )
    }
}

export default LoggedOutComponent;
