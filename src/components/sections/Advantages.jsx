import React from "react";
import AdvantageCard from "../molecules/AdvantageCard";

function Advantages(props)
{
    return(
        <section className="Advantages">
            <div className="container">
                <h1 className="section-title">За что нас ценят больше всего</h1>
                <div className="AdvCard-container">
                    {props.cards}
                </div>
                </div>
        </section>
    )
}

export default Advantages;