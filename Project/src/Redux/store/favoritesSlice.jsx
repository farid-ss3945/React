import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites(state, action) {
            const product = action.payload;
            const exists = state.items.find(p => p.id === product.id);
            if (!exists) {
                state.items.push(product);
            }
        },
        removeFromFavorites(state, action) {
            state.items = state.items.filter(p => p.id !== action.payload);
        },
        setFavorites: (state, action) => { state.items = action.payload.items; },
        clearFavorites(state) {
            state.items = [];
        }
    }
});

export const { addToFavorites, removeFromFavorites,clearFavorites,setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

