import React from "react";
import { useEffect, useState } from "react";
import PokeCard from "./PokeCard";


const App = () => {

    const [pokemon, setPokemon] = useState([]);
    const [search, setSearch] = useState('');
    const searchPokemon = async (title) => {
        const URL="https://pokeapi.co/api/v2/pokemon/"
        title=title.toLowerCase();
        const poke_URL=`${URL}${title}`;
        const response = await fetch(poke_URL);
        const data = await response.json();
        console.log(data);
        (Object.keys(data).length>0)?
        setPokemon(data):setPokemon({});

    }

    useEffect(() => {searchPokemon("charizard")},[]);
    return (
        <div>
            <div className="heading">
                <img className="logo" src="https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png" alt="pokemon-logo"></img>
            </div>
            
            <div className="search">
                
                <input placeholder="Enter a Pokemon e.g. Charizard" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                
                    <button id="btn" onClick={() => searchPokemon(search)}><i class="fa-solid fa-magnifying-glass"></i></button>
                
            </div>
            
            <div>
                {
                    (Object.keys(pokemon).length > 0) ?
                    (<div className="container">
                        {<PokeCard image={pokemon.sprites.other["official-artwork"].front_default} 
                                    name={pokemon.name.toUpperCase()}
                                    type={pokemon.types[0].type.name}    
                                    />}
                    </div>):
                    (<div className="container">
                        {<PokeCard image="https://via.placeholder.com/400" name="Pokemon Dosen't Exist" type="Error"/>}
                    </div>)

                }

            </div>


        </div>
    );
}
document.addEventListener("keypress", function(event)
{
    if(event.key === "Enter")
    {
        document.getElementById("btn").click();
    }
}
);
export default App;