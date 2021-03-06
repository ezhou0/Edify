import React from "react"
import { Link, Redirect, Route } from "react-router-dom"

class SplashComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='home-container'>
                <div className='navbar'>
                   
                        <div className='home-logo-div'>
                            <Link className='home-logo-link' to='/'>
                            <img className="home-logo" src={window.edifyURL} alt="Edify Logo" /> 
                            <div className='home-logo-text'>dify</div>
                            </Link>
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
                    <p><Link className='home-splash-button' to='./signup'>GET EDIFY FREE</Link></p>
                </div>


            </div>
        )
    }
}

export default SplashComponent;
