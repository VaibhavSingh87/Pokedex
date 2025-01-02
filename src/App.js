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
    var Pokemon=["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];
    useEffect(() => {searchPokemon(Pokemon[Math.floor(Math.random()*Pokemon.length)])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <div>
            <div className="heading">
                <img className="logo" src="https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png" alt="pokemon-logo"></img>
            </div>
            
            <div className="search">
                
                <input placeholder="Enter a Pokemon e.g. Charizard, Bulbasaur" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                
                    <button id="btn" onClick={() => {searchPokemon(search);setSearch("")}}><i class="fa-solid fa-magnifying-glass"></i></button>
                
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