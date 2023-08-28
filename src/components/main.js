import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import one from "./choices/one.png";
import two from "./choices/two.png";
import three from "./choices/three.png";
import four from "./choices/four.png";
import five from "./choices/five.png";
import six from "./choices/six.png";
import dotRuns from "./choices/dot.png";
import legBy from "./choices/legBy.png";
import out from "./choices/out.png";
import sixRuns from "./choices/sixRuns.png";
import fourRuns from "./choices/fourRuns.png";
import noBall from "./choices/noBall.png";
import umpire from "./choices/umpire.png";
import run1 from "./choices/run1.png";
import run2 from "./choices/run2.png";
import run5 from "./choices/ball.png";
let runscore = 0;
function Main(){


    useEffect(()=>{
        runscore = 0;
    },[])

    const processPlay =(event)=>{
        const circles = document.querySelectorAll(".circle");
        circles.forEach(circle=>{
            circle.classList.remove("selected");
        })
        const umpireDecision = document.getElementById("umpire");
        const decision = document.getElementById("decision");
        const playerChoice = event.currentTarget.id;
        event.currentTarget.classList.toggle("selected");
        console.log(playerChoice);
       
        const random = ["one","two","three","four","five","six","yorker"];
        const random_no = Math.floor(Math.random()*6)
        
        const computerChoice = random[random_no];
        console.log(computerChoice);
        const computerPick = document.getElementById("computerPick");
        if(computerChoice=="one"){
            computerPick.src = one;
        }
        else if(computerChoice=="two")
        {
            computerPick.src = two;
            console.log(computerPick.src);
        }
        else if(computerChoice=="three"){
            computerPick.src = three;
        }
        else if(computerChoice=="four")
        {
            computerPick.src = four;
        }
        else if(computerChoice=="five")
        {
            computerPick.src = five;
        }
        else if(computerChoice=="six")
        {
            computerPick.src = six;
        }
        else if(computerChoice =="dot"){
            computerPick.src = dotRuns;
        }
     
        const out = document.getElementById("out");
        const choices = document.getElementById("choices");

        if(playerChoice == computerChoice){
            decision.src = out;
            const title = document.getElementById("title");
            title.classList.add("hidden");
            out.classList.remove("hidden");
            choices.classList.add("hidden");
            const topsec =document.getElementById("topsec");
            topsec.style.border = "none";
            const scoreBox = document.getElementById("scorebox");
            scoreBox.style.marginLeft = "77%";
            const back = document.getElementById("back");
            back.classList.remove("hidden");
            return runscore;

        }
        else if(playerChoice=="one"){
            decision.src = run1;
            runscore = runscore+1;
            
        }
        else if(playerChoice=="two"){
            decision.src = run2;
            runscore = runscore+2;
        }
        else if(playerChoice =="three"){
            decision.src = run2;
            runscore = runscore+3;
        }
        else if(playerChoice=="five"){
            decision.src = run5;
            runscore = runscore+5;
        }
        else if(playerChoice=="dot"){
            const randombyRun = [umpire,legBy];
            const random_n = Math.floor(Math.random()*2);
            const randomDecion = randombyRun[random_n];
            decision.src = randomDecion; 
        }
        else if(playerChoice=="six"){
            decision.src = sixRuns;
            runscore = runscore+6;
        }
        else if(playerChoice=="four"){
            decision.src = fourRuns;
            runscore = runscore+4;
        }
        const score = document.getElementById("score");
        score.innerHTML = runscore;
        console.log(runscore);
        // else if(computerChoice=="yorker" && playerChoice=="dot"){
        //         decision.src = yorker;
        //         const score = document.getElementById("score");
        //         score.innerHTML = runscore;
        //         decision.src = out;
        //         const title = document.getElementById("title");
        //         title.classList.add("hidden");
        //         out.classList.remove("hidden");
        //         choices.classList.add("hidden");
        //         const topsec =document.getElementById("topsec");
        //         topsec.style.border = "none";
        //         const scoreBox = document.getElementById("scorebox");
        //         scoreBox.style.marginLeft = "77%";
        //         const back = document.getElementById("back");
        //         back.classList.remove("hidden");
        //         return runscore;
        // }

    }


    return(

        <div className="theGame">
            <div className="topSection" id="topsec">
                <h1 id="title">HAND CRICKET</h1>
                <div className="theScore" id="scorebox">
                    <h2>Score</h2>
                    <h3 id="score">0</h3>
                </div>
            </div>
            <div className="gameSection">
                <div className="out hidden" id="out">
                    <h1>OUT</h1>
                </div>
                <div className="computer">
                    <h2>Computer</h2>
                    <div className="circle">
                        <img src={run5} id="computerPick"></img>
                    </div>
                </div>

                <div className="result">
                    <div className="umpireSection" id="umpire">
                        <img src={umpire} id="decision"></img>
                    </div>
                </div>

    
                <div className="player">
                    <Link to="/" className="back hidden" id="back"><h1>BACK</h1></Link>
                    <div className="choices" id="choices">
                        <div className="row">
                            <div className="circle" id ="one" onClick={processPlay}><img src={one} ></img></div>
                            <div className="circle" id="two" onClick={processPlay}><img src={two}></img></div>
                            <div className="circle" id="three" onClick={processPlay}><img src={three}></img></div>
                        </div>
                        <div className="row">
                            <div className="circle" id="four" onClick={processPlay}><img src={four}></img></div>
                            <div className="circle" id="five" onClick={processPlay}><img src={five}></img></div>
                            <div className="circle" id="six" onClick={processPlay}><img src={six}></img></div>
                        </div>
                        <div className="row">
                            <div className="circle" id="dot"  onClick={processPlay}><img src={dotRuns}></img></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;