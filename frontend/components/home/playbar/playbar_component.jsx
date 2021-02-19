import React from "react";

class Playbar extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="playbar_main">
                <div className="playbar_left">
                    
                    <ul>
                        <li>
                            album image
                        </li>
                        <li>song title</li>
                        <li>artist name</li>
                    </ul>
                </div>
                <div className="playbar_mid">
                    <p>Playbar interface</p>
                </div>
                <div className="playbar_right">

                </div>
            </div>
        )
    }
}

export default Playbar;