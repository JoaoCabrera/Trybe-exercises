import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        return (
            <div className="pokedex">
                {this.props.pokemons.map((pokemon, index) => <Pokemon key={index} pokemon={pokemon} />)}
            </div>
        );
    }
}

export default Pokedex;
