import "./Login.css"
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import {RegisterPage} from "../reg/Register.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { login, clearError } from '../../Redux/store/authSlice.jsx';
import {useState} from "react";
import {clearCart} from "../../Redux/store/cartSlice.jsx";
import {clearFavorites} from "../../Redux/store/favoritesSlice.jsx";
import {setFavorites} from "../../Redux/store/favoritesSlice.jsx";
import {setCart} from "../../Redux/store/cartSlice.jsx";
import {loadUserData} from "../../Redux/utils.jsx";

export function LoginPage() {
    const dispatch = useDispatch();

    const error = useSelector(state => state.auth.error);
    const isAuth = useSelector(state => state.auth.isAuth);
    const auth = useSelector(state => state.auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    function handleLogin() {
        if (!email || !password) {
            alert('Fill all fields');
            return;
        }

        dispatch(login({ email, password }));
        if (isAuth) {
            dispatch(clearCart());
            dispatch(clearFavorites());
        }
        setEmail('');
        setPassword('');
    }


    return (
        //<BrowserRouter>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Вход</h2>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {isAuth && <p style={{ color: 'green' }}>Logged in successfully</p>}

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
                                placeholder="example@email.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Пароль
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
                                placeholder="Введите пароль"
                            />
                        </div>

                        <button onClick={handleLogin} className="w-full bg-blue-600 text-white hover:bg-blue-300 px-3 py-2 rounded text-xl font-bold transition">
                            Войти
                        </button>
                    </div>
                    <p
                        onClick={() => navigate("/register")}
                        className="text-blue-500 text-center cursor-pointer mt-6"
                    >
                        Нет аккаунта?{' '}   Зарегистрироваться
                    </p>



                        {/*<Link to="/RegisterPage" className="text-blue-600 font-semibold hover:underline">

                        </Link>*/}
                </div>
            </div>
           /* <Routes>
                <Route path="/RegisterPage" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>*/
    )
}