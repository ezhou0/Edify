import React from "react";
import { Link, Redirect, Route } from "react-router-dom";


class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropdownButton: "header_dropdown_button_down"};
        this.userProfile = "header_users_div";
        this.handleDropDown = this.handleDropDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
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

    handleLogout() {
        
    }

    render() {
        return (
            <div id="header_component">
                <div id={`${this.userProfile}`}>
                    <div id="header_profile">
                       <p>profile icon </p>
                    </div>
                    <div id="header_user_name">
                        {this.props.currentUser}
                    </div>
                    <button id="header_dropdown_button" onClick={this.handleDropDown}>
                       
                    </button>
                </div>
                <div id={this.state.dropdownButton}>
                    <a className="drop_down_div" href="https://github.com/ezhou0">Github</a>
                    <a className="drop_down_div" href="https://www.linkedin.com/">LinkedIn</a>
                    <button className="drop_down_div" onClick={this.props.logout}>
                        Log Out
                    </button>
                </div>
            </div>
        )
    }
}

export default HeaderComponent;