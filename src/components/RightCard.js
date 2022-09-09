import React from "react";

function RightCard(props) {
    return (
        <div className="rightInner">
            <div className="div1">
                <img src="images/marker.png" alt="" className="marker"/>
                <span className="">{props.location.toUpperCase()}</span>
                <a href={props.googleMapsUrl}>View on Google Mans</a>
            </div>
            <div className="div2">
                <h1>{props.title}</h1>
            </div>
            <div className="div3">
                <p>{props.startDate} - {props.endDate}</p>
            </div>
            <div className="div4">
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default RightCard;