import React, { Component } from "react";
import "./Pokecard.css";

const padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number)


class Pokecard extends Component {
  render() {
    const { id, name, type, exp } = this.props;
    // const api = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
    const api = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;
    const img = `${api}${padToThree(id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <div className="Pokecard-image">
          <img src={img} alt={name} />
        </div>
        <div className="Pokecard-data">Type: {type}</div>
        <div className="Pokecard-data">EXP: {exp}</div>
      </div>
    );
  }
}

export default Pokecard;
