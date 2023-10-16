import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFavorites = createAsyncThunk('favorites/fetchFavorites', async (favorites, thunkAPI) => {
  try {
      return favorites;
  } catch(error) {
      return thunkAPI.rejectWithValue({error: 'Could not fetch favorites'})
  }
});


const favoritesSlice = createSlice({
  name: 'favorites',
  initialState : {
    favorites: [],
    isSelectedAFavorite: null
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(item => item.name !== action.payload);
    },
  },
});


export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;


export default favoritesSlice;
