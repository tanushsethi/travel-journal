import React from "react";
import LeftCard from "./LeftCard"
import RightCard from "./RightCard"

function Card(props){
    return(
        <div className="card">
            <div className="left">
                <LeftCard/>
            </div>
            <div className="right">
                <RightCard/>
            </div>
        </div>
    );
}

export default Card
