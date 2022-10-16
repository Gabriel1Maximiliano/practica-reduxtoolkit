import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter/counterSlice'
import pokemonSlice from './slices/pokemon/pokemonSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonSlice
  },
})