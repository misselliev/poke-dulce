import { configureStore } from "@reduxjs/toolkit";
import pokeSlice from './pokeSlice'

const store = configureStore({
    reducer: {
        pokemon: pokeSlice.reducer
    }
})

export default store