import React, { useEffect } from 'react'
import { getPokemons } from './store/slices/pokemon/thunks';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux/es/hooks/useSelector';
export const PokemonApp = () => {

    const dispatch = useDispatch();
    
    const {isLoading,pokemons,page} = useSelector((state)=>state.pokemons);

    useEffect(() => {
     dispatch(getPokemons())
    }, [dispatch])
    
  return (
    <>
    <h1>PokemonApp</h1>
    <hr />
    <h2>Loading {isLoading?<p>true</p>:<p>false</p>}</h2>
    <ul>
     {
        pokemons.map(pokemon=>(
            <li key={pokemon.name} >{pokemon.name}</li>
        ))
     }
    </ul>
    <button
    onClick={()=> dispatch(getPokemons(page))}
    >next</button>
    </>
  )
}
