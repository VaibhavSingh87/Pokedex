import React from "react";

const PokeCard = (props) => {
    return (
        <div className="card">
            <img className="pokeimg" src={props.image} alt=""></img>
            <span className="pokename">{props.name}</span>
            <span className="poketype">{props.type.toUpperCase()} TYPE</span>
        </div>
    );
}

export default PokeCard;