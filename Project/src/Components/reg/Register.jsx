import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register as registerAction } from '../../Redux/store/authSlice.jsx';
import { clearCart, setCart } from '../../Redux/store/cartSlice.jsx';
import { clearFavorites, setFavorites } from '../../Redux/store/favoritesSlice.jsx';
import { loadUserData } from "../../Redux/utils.jsx";

export function RegisterPage() {
    const dispatch = useDispatch();

    const error = useSelector(state => state.auth.error);
    const isAuth = useSelector(state => state.auth.isAuth);
    const user = useSelector(state => state.auth.user);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth && user?.id) {
            const saved = loadUserData(user.id);
            // New users have no saved data; existing re-login restores theirs
            dispatch(setCart(saved.cart));
            dispatch(setFavorites(saved.favorites));
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }
    }, [user?.id]);

    function handleRegister() {
        if (!name || !email || !password || !confirmPassword) {
            alert('Fill all fields');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        dispatch(registerAction({ name, email, password }));
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Регистрация</h2>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                {isAuth && <p style={{ color: 'green' }}>Registered successfully!</p>}

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
                            placeholder="Введите ваше имя"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
                            placeholder="example@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Пароль</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Повторите пароль</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
                            placeholder="Повторите пароль"
                        />
                    </div>

                    <button
                        onClick={handleRegister}
                        className="w-full bg-blue-600 text-white hover:bg-blue-300 px-3 py-2 rounded text-xl font-bold transition"
                    >
                        Зарегистрироваться
                    </button>
                </div>

                <p
                    onClick={() => navigate("/login")}
                    className="text-blue-500 text-center mt-6 cursor-pointer"
                >
                    Уже есть аккаунт?{' '}
                    <Link to="/login" className="text-blue-600 font-semibold hover:underline">
                        Войти
                    </Link>
                </p>
            </div>
        </div>
    );
}