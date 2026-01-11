import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice.jsx';
import cartReducer from './cartSlice';
import productsReducer from './productsSlice';
import favoritesReducer from './favoritesSlice';
import {useDispatch, useSelector} from "react-redux";

const savedAuth = JSON.parse(localStorage.getItem('auth'));

const savedCart = savedAuth?.id
    ? JSON.parse(localStorage.getItem(`cart_${savedAuth.id}`))
    : { items: [] };

const savedFavorites = savedAuth?.id
    ? JSON.parse(localStorage.getItem(`favorites_${savedAuth.id}`))
    : { items: [] };

export const storem = configureStore({
    reducer: {
        auth: authReducer,
        products: productsReducer,
        cart: cartReducer,
        favorites: favoritesReducer
    },
    preloadedState: {
        auth: savedAuth || undefined,
        cart: savedCart,
        favorites: savedFavorites,
    }
});

storem.subscribe(() => {
    const state = storem.getState();
    const userId = state.auth.user?.id;

    if (userId) {
        localStorage.setItem(`cart_${userId}`, JSON.stringify(state.cart));
        localStorage.setItem(`favorites_${userId}`, JSON.stringify(state.favorites));
    }
});
