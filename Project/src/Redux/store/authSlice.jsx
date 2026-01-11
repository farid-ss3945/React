import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    id: Date.now() + Math.floor(Math.random() * 1000),
    user: null,
    error: null,
    isAuth: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register(state, action) {
            const { name, email, password } = action.payload;

            const exists = state.users.find(u => u.email === email);
            if (exists) {
                state.error = 'User already registered';
                state.user = null;
                state.isAuth = false;
                return;
            }

            const newUser = { id: Date.now() + Math.floor(Math.random() * 1000),name, email, password };
            state.users.push(newUser);
            state.user = newUser;
            state.isAuth = true;
            state.error = null;
        },

        login(state, action) {
            const { email, password } = action.payload;
            const user = state.users.find(
                u => u.email === email && u.password === password
            );

            if (!user) {
                state.error = 'Invalid credentials';
                state.user = null;
                state.isAuth = false;
                return;
            }

            state.user = user;
            state.isAuth = true;
            state.error = null;
        },

        logout(state) {
            state.user = null;
            state.isAuth = false;
            state.error = null;
        },

        clearError(state) {
            state.error = null;
        }
    }
});

export const { register, login, logout, clearError } = authSlice.actions;
export default authSlice.reducer;
