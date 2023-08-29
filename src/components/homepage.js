import React, { useState } from "react";
import { Link } from "react-router-dom";
import bg from "./choices/ball.png"

let input1 = "";
let input2 = "";
function Homepage(){

    const processMultiplayerSection = (event) =>{

        const multiplayer = document.getElementById("multiplayerSection");
        multiplayer.classList.remove("hidden");
        const containers = document.getElementById("containers");
        containers.classList.add("hidden");
    }

    // const[input1,setInput1] = useState("");
    // const[input2,setInput2] = useState("");

    const processInput1 = (event) =>{
        input1 = event.target.value.toUpperCase();
        // setInput1(name1);
    }
    const processInput2 = (event) =>{
        input2 = event.target.value.toUpperCase();
        // setInput2(name2);
    }



    return(

        <div className="homePage" id="home">
            <div className="mainSection">
                <img id="bg" src={bg}></img>
                <div className="leftPage">
                    <h1>HAND CRICKET</h1>
                    <p>The new cricket game</p>
                </div>
                <div className="rightPage">
                    <div className="containerSection" id="containers">
                        <div className="container"><h2><Link to="/main" id="play">PLAY</Link></h2></div>
                        <div className="container" onClick={processMultiplayerSection}><h2>MULTIPLAYER</h2></div>
                        <div className=" container"><h2 id="rules">RULES</h2></div>
                    </div>
                    <div className="multiPlayer hidden" id="multiplayerSection">
                        <h1>multiPlayer</h1>
                        <div className="inputSection">
                            <input id="firstPlayer" placeholder="FirstPlayer" onChange={processInput1} autoComplete="off">

                            </input>
                            <input id="secondPlayer" placeholder="SecondPlayer" onChange={processInput2} autoComplete = "off">

                            </input>
                        </div>
                        <Link to= "/main" id="multiPlay"><h2>PLAY</h2></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
export {input1,input2};