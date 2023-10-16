import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseApiURL = 'https://pokeapi.co/api/v2/pokemon';

const specificPokemon = (pokemon)=> `https://pokeapi.co/api/v2/pokemon/${pokemon}/`

export const getPokeList = createAsyncThunk('pokemon/getPokeList', async (page, thunkAPI) => {
  const _limit = page * 20 !== 140 ? 20 : 11; 
  try {
    const response = await axios.get(`${baseApiURL}?offset=${page * 20}&limit=${_limit}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export const getSpecificPokemon = createAsyncThunk('pokemon/getSpecificPokemon', async(pokemon, thunkAPI) => {
  try {
      const response = await axios.get(specificPokemon(pokemon))
      return response.data
  } catch(error){
  return thunkAPI.rejectWithValue({error: error.message})
  }
})

export const calculateTotalPages = (totalItems, itemsPerPage) => Math.ceil(totalItems / itemsPerPage);

const pokeSlice = createSlice({
  name: 'pokemon',
  initialState: {
    status: 'idle',
    error: null,
    list: [],
    selectedName: '',
    selectedPokemonInfo: null,
    currentPage: 0,
    totalItems: 151, // Total items you want to fetch
  },
  reducers: {
    selectPokemon: (state, action) => {
      state.selectedName = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokeList.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload.error;
      })
      .addCase(getPokeList.fulfilled, (state, action) => {
        state.status = 'success';
        state.list = action.payload.results;
      })
      .addCase(getPokeList.pending, (state) => {
        state.status = 'loading';
      }).addCase(getSpecificPokemon.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload.error;
      })
      .addCase(getSpecificPokemon.fulfilled, (state, action) => {
        state.status = 'success';
        state.selectedPokemonInfo = action.payload;
      })
      .addCase(getSpecificPokemon.pending, (state, action) => {
        state.status = 'loading';
        state.selectedPokemonInfo = action.payload;
      });
  },
});

export const { selectPokemon, setCurrentPage } = pokeSlice.actions;

export default pokeSlice;
