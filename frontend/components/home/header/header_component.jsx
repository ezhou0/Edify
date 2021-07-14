import React from "react";
import { Link, Redirect, Route } from "react-router-dom";


class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropdownButton: "hidden"};
        this.linkStatus = "link_div_hidden";
        this.handleDropDown = this.handleDropDown.bind(this);
    }
    handleDropDown() {
        if (this.state.dropdownButton === "hidden") {
            this.setState({ dropdownButton: "revealed"});
            this.linkStatus = "link_div_revealed";
        } else {
            this.setState({ dropdownButton: "hidden"});
            this.linkStatus = "link_div_hidden";
        }
    }

   

    

    render() {
        return (
            <div id="header_component">
                <div className="header_buttons">
                    <button className="header_history" id="header_back_button"
                        onClick={() => this.props.history.goBack()} value = 'back'>
                        <i className="fas fa-angle-left fa-lg"></i>
                    </button>
                    <button className="header_history" id="header_forward_button"
                        onClick={() => this.props.history.goForward()} value = 'forward'>
                        <i className="fas fa-angle-right fa-lg"></i>
                    </button>
                </div>


                <div  className = 'header-content'>
                    
                    <div className='links-container' id={`${this.linkStatus}`}>
                        <button className='links-btn' onClick={this.handleDropDown}>
                            Links
                        </button>
                        <div id={this.state.dropdownButton}>
                            <a className="drop_down_div" href="https://github.com/ezhou0/Edify/wiki">Github</a>
                            <a className="drop_down_div" href="https://www.linkedin.com/in/edwin-zhou-a231b31b6/" target="_blank">LinkedIn</a>
                        </div>
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