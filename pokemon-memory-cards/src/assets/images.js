import pikachu from "../../public/images/pikachu.png"
import diglett from "../../public/images/diglett.png"
import squirtle from "../../public/images/squirtle.png"
import charizard from "../../public/images/charizard.png"

export function info(){
    const pokemonData = [
        { name: pikachu, background: 'linear-gradient(to bottom, yellow, red)' },
        { name: diglett, background: 'linear-gradient(to bottom, rgb(225,166,107), gray)' },
        { name: squirtle, background: 'linear-gradient(to bottom, rgb(108,173,198), rgb(254,228,179))' },
        { name: charizard, background: 'linear-gradient(to bottom, rgb(46,78,78), rgb(254,139,0))'}
    ];

      return pokemonData;
}