import React from "react";
import stability from "../../images/Stability.png"

function AdvantageCard(props)
{
    return(
        <div className="AdvCard">
            <img src={props.img} alt=""></img>
            <h3 className="AdvCardTitle">{props.name}</h3>
            <p className="AdvCardDesc">{props.desc}</p>
        </div>
    )
}

export default AdvantageCard;