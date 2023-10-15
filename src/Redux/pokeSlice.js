import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Brings list of 20 
const allPokemonURL = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20'


// Brings individual pokemon 
const specificPokemon = (pokemon)=> `https://pokeapi.co/api/v2/pokemon/${pokemon}/`


export const getPokeList = createAsyncThunk('pokemon/getPokeList', async(thunkAPI) => {
        try {
            const response = await axios.get(allPokemonURL)
            return response.data.results
        } catch(error){
        return thunkAPI.rejectWithValue({error: error.message})
    }
})


export const getSpecificPokemon = createAsyncThunk('pokemon/getPokemon', async(pokemon, thunkAPI) => {
    try {
        const response = await axios.get(specificPokemon(pokemon))
        return response.data
    } catch(error){
    return thunkAPI.rejectWithValue({error: error.message})
    }
})

const pokeSlice = createSlice({
    name: 'pokemon',
    initialState: {
        status: 'idle',
        error: null,
        list: [],
        selectedName: '',
        selectedPokemonInfo: null
    },
    reducers: {
        selectPokemon: (state, action) => {
            state.selectedName = action.payload
        },
    },
    extraReducers: {
        [getPokeList.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload.error
        },
        [getPokeList.fulfilled]: (state, action) => {
            state.status = 'success'
            state.list= action.payload
        },
        [getPokeList.pending]: (state, action) => {
            state.status = 'loading',
            state.list = action.payload
        },
        [getSpecificPokemon.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload.error
        },
        [getSpecificPokemon.fulfilled]: (state, action) => {
            state.status = 'success'
            state.selectedPokemonInfo= action.payload
        },
        [getSpecificPokemon.pending]: (state, action) => {
            state.status = 'loading',
            state.selectedPokemonInfo = action.payload
        }
    } 
})


// ivan.fuentes@densitylabs.io

export default pokeSlice