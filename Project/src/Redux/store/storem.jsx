import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice.jsx';
import cartReducer from './cartSlice';
import productsReducer from './productsSlice';
import favoritesReducer from './favoritesSlice';

const load = (key, fallback) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
};

const users   = load('users', []);
const session = load('session', { user: null, isAuth: false });
const uid     = session.user?.id;

let currentSaveUid = uid;

export const storem = configureStore({
    reducer: {
        auth: authReducer,
        products: productsReducer,
        cart: cartReducer,
        favorites: favoritesReducer,
    },
    preloadedState: {
        auth: {
            users,
            user:   session.user   ?? null,
            isAuth: session.isAuth ?? false,
            error:  null,
        },
        cart:      uid ? load(`cart_${uid}`,      { items: [] }) : { items: [] },
        favorites: uid ? load(`favorites_${uid}`, { items: [] }) : { items: [] },
    },
});

storem.subscribe(() => {
    const { auth, cart, favorites } = storem.getState();
    const userId = auth.user?.id;

    localStorage.setItem('users',   JSON.stringify(auth.users));
    localStorage.setItem('session', JSON.stringify({ user: auth.user, isAuth: auth.isAuth }));

    if (userId && userId === currentSaveUid) {
        localStorage.setItem(`cart_${userId}`,      JSON.stringify(cart));
        localStorage.setItem(`favorites_${userId}`, JSON.stringify(favorites));
    }
    currentSaveUid = userId;
});