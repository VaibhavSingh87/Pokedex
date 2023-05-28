import React from "react";

const PokeCard = (props) => {
    return (
        <div className="card">
            <img className="pokeimg" src={props.image} alt=""></img>
            <span className="pokename">{props.name}</span>
            <span className="poketype" style={{backgroundColor: bgColor(props.type)}}>{props.type.toUpperCase()}</span>
        </div>
    );
}
function bgColor(type) {
    if(type === "fire")
    return "#E55807"
    else
    if(type === "water")
    return "#30A2FF"
    else
    if(type === "fighting")
    return "#7E1717"
    else
    if(type === "grass")
    return "#54B435"
    else
    if(type === "dark")
    return "#404258";
    else
    if(type === "psychic")
    return "#FB2576"
    else
    if(type === "poison" || type === "bug")
    return "#540375"
    else
    if(type === "steel")
    return "#6B728E"
    else
    if(type === "rock")
    return "#735F32"
    else
    if(type === "flying")
    return "#B5D5C5"
    else
    if(type === "electric")
    return "#E7B10A"
    else
    if(type === "normal" || type === "ground")
    return "#C69749"
    else
    if(type === "fairy")
    return "#F273E6"
    else
    if(type === "dragon")
    return "#6F1AB6"
    else
    if(type === "ghost")
    return "#2B3467"
    else
    if(type === "ice")
    return "#82C3EC"
}

export default PokeCard;