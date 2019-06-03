import React, { Component } from 'react';
import { isEqual } from 'lodash';

import PokemonList from '../PokemonList';
import Paginations from '../common/pagination/Pagination';
import { IPaginationState } from '../../store/pagination/reducer';
import { IPokemonAPIResource } from '../../interfaces/pokemons.interface';
import { IPokemonTypeAPIResource } from '../../interfaces/pokemons.interface';


export interface IAppProps {
  pokemonList: IPokemonTypeAPIResource[];
  pagination: IPaginationState;
  pokemonCount: number;
  showPokemons: (pokemons: IPokemonAPIResource[]) => void;
}

export default class PokedexPageByFilter extends Component<IAppProps> {

  componentDidUpdate(prevProps: IAppProps) {
    if (!isEqual(this.props.pagination, prevProps.pagination)) {
      const { pagination } = this.props;
      this.props.showPokemons(this.props.pokemonList.slice(pagination.startIndex, pagination.endIndex + 1));
    }
  }

  public render() {
    return (
      <div>
        <Paginations count={this.props.pokemonCount}></Paginations>
        <PokemonList />
        <Paginations count={this.props.pokemonCount}></Paginations>
      </div>
    );
  }
}
