import React from "react";
import { Link, Redirect, Route } from "react-router-dom";


class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropdownButton: "header_dropdown_button_down"};
        this.userProfile = "header_users_div";
        this.handleDropDown = this.handleDropDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
       
    }

    handleDropDown() {
        if (this.state.dropdownButton === "header_dropdown_button_down") {
            this.setState({ dropdownButton: "header_dropdown_button_up" });
            this.userProfile = "header_users_div_up";
        } else {
            this.setState({ dropdownButton: "header_dropdown_button_down"});
            this.userProfile = "header_users_div";
        }
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
                        back
                    </button>
                    <button className="header_history" id="header_forward_button"
                        onClick={() => this.props.history.goForward()} value = 'forward'>
                       forward
                    </button>
                </div>


                <div id={`${this.userProfile}`} className = 'header-content'>
                    <div id="header_profile">
                       
                    </div>
                    <div id="header_user_name">
                        {this.props.currentUser}
                    </div>
                    <button id="header_dropdown_button" onClick={this.handleDropDown}>
                       
                    </button>
                    <div className = 'header-logout-container'>
                    <button className="header-logout" onClick={this.props.logout}>
                        Log Out
                    </button>
                    </div>
                </div>
                <div id={this.state.dropdownButton}>
                    <a className="drop_down_div" href="https://github.com/ezhou0">Github</a>
                    <a className="drop_down_div" href="https://www.linkedin.com/">LinkedIn</a>
                </div>
                
            </div>
        )
    }
}

export default HeaderComponent;