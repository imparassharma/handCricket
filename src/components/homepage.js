import React from "react";
import { Link } from "react-router-dom";


function Homepage(){




    return(

        <div className="homePage" id="home">
            <div className="mainSection">
                <div className="leftPage">
                    <h1>HAND CRICKET</h1>
                    <p>The new cricket game</p>
                </div>
                <div className="rightPage">
                    <div className="container"><h2><Link to="/main" id="play">PLAY</Link></h2></div>
                    <div className="container"><h2><Link to="/main" id="multiplayer">MULTIPLAYER</Link></h2></div>
                    <div className=" container"><h2 id="rules">RULES</h2></div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;