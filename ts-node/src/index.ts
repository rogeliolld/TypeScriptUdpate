// import { getPokemon } from "./generics/get-pokemon";

import { Pokemon } from "./decorators/pokemon-class";

// getPokemon(5)
//     .then(pokemon=>console.log(pokemon.sprites.front_default))
//     .catch(error=>console.error(error))
//     .finally( ()=> console.log('Fin de getPokemon'))
    
 
const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';

// console.log(charmander.savePokemonToDB(50));
// charmander.savePokemonToDB(10);
charmander.publicApi = 'https://rogelio.com';
console.log(charmander);

