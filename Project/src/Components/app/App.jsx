import { Routes, Route } from "react-router-dom";
import Panel from "../top-panel/Panel.jsx";
import { LoginPage } from "../log/Login.jsx";
import { RegisterPage } from "../reg/Register.jsx";
import { CartPage } from "../cart/Cart.jsx";
import { FavoritesPage } from "../favs/Favorites.jsx";
import { Home } from "./Home.jsx";
import {Navbar} from "./Navbar.jsx";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Panel />}>
                <Route index element={<Home />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="favorites" element={<FavoritesPage />} />
            </Route>
        </Routes>
    );
}

export default App;
