import React from "react"
import Card from "./Card"
import dataArray from "../data"

function CardCon(){
    var cardArray = dataArray.map((item)=>{
        return(
          <Card
            id={item.id}
            {...item}
          />
        );
    });
    return(
      <div className="cardCon">
        {cardArray}
      </div>  
    );
}

export default CardCon