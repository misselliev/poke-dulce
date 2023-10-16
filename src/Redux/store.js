import { configureStore } from "@reduxjs/toolkit";
import pokeSlice from './pokeSlice'
import favoritesSlice from './favoritesSlice'

const store = configureStore({
    reducer: {
        pokemon: pokeSlice.reducer,
        favorites: favoritesSlice.reducer
    }
})

export default store