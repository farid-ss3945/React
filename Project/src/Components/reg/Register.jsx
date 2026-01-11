import { useState } from 'react';
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import {LoginPage} from "../log/Login.jsx";
import {useSelector, useDispatch} from "react-redux";
import {storem} from "../../Redux/store/storem.jsx";
import { register as registerAction, clearError } from '../../Redux/store/authSlice.jsx';
import {clearCart} from '../../Redux/store/cartSlice.jsx';
import {clearFavorites} from '../../Redux/store/favoritesSlice.jsx';
import {setFavorites} from "../../Redux/store/favoritesSlice.jsx";
import {setCart} from "../../Redux/store/cartSlice.jsx";
import {loadUserData} from "../../Redux/utils.jsx";

export function RegisterPage() {
    const dispatch = useDispatch();

    const error = useSelector(state => state.auth.error);
    const isAuth = useSelector(state => state.auth.isAuth);
    const auth = useSelector(state => state.auth);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    function handleRegister() {
        if (!name || !email || !password || !confirmPassword) {
            alert('Fill all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        if (isAuth) {
            dispatch(clearCart());
            dispatch(clearFavorites());
        }

        dispatch(registerAction({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    return (

    //<BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Регистрация</h2>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Имя
                        </label>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {isAuth && <p style={{ color: 'green' }}>Registered successfully!</p>}

                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
                            placeholder="Введите ваше имя"
                        />
                    </div>

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
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Повторите пароль
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
                            placeholder="Повторите пароль"
                        />
                    </div>

                    <button onClick={handleRegister} className="w-full bg-blue-600 text-white hover:bg-blue-300 px-3 py-2 rounded text-xl font-bold transition">
                        Зарегистрироваться
                    </button>
                </div>
                <p
                    onClick={() => navigate("/login")}
                    className="text-blue-500 text-center mt-6 cursor-pointer"
                >
                    Уже есть аккаунт?{' '}   Войти
                </p>


                    {/*<Link to="/LoginPage" className="text-blue-600 font-semibold hover:underline">

                    </Link>*/}
            </div>
        </div>
        /*<Routes>
            <Route path="/LoginPage"/>
        </Routes>
        </BrowserRouter>*/
    );
}
