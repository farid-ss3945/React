import './index.css'
import App from './Components/app/App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from 'react-redux';
import {storem} from "./Redux/store/storem.jsx";
import {LoginPage} from "./Components/log/Login.jsx";
import {RegisterPage} from "./Components/reg/Register.jsx";
import {CartPage} from "./Components/cart/Cart.jsx";
import {FavoritesPage} from "./Components/favs/Favorites.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={storem}><BrowserRouter><App/></BrowserRouter></Provider>)
