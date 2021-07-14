import React from "react";
import { Link, Redirect, Route } from "react-router-dom";


class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);

       
    }

   
    

    handleChange(e) {
        this.setState({ search: e.currentTarget.value });
    }

    

    render() {
        return (
            <div id="header_component">
                <div className="header_buttons_and_search">
                    <button className="header_history" id="header_back_button"
                        onClick={() => this.props.history.goBack()} value = 'back'>
                        <i className="fas fa-angle-left"></i>
                    </button>
                    <button className="header_history" id="header_forward_button"
                        onClick={() => this.props.history.goForward()} value = 'forward'>
                        <i className="fas fa-angle-right"></i>
                    </button>
                </div>


                <div id={`${this.userProfile}`} className = 'header-content'>
                    
                    <div id="header_user_name">
                        {this.props.currentUser}
                    </div>
                    
                    <div className = 'header-logout-container'>
                    <button className="header-logout" onClick={this.props.logout}>
                        Log Out
                    </button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default HeaderComponent;