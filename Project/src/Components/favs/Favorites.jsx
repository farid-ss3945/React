import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../../Redux/store/favoritesSlice';
import {addToCart} from "../../Redux/store/cartSlice.jsx";
import {clearFavorites} from '../../Redux/store/favoritesSlice';

export function FavoritesPage() {
    const favorites = useSelector(state => state.favorites.items);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const handleAddToCart = (item) => {
        if (!auth?.isAuth) {
            alert("You need to sign in first!");
            return;
        }
        dispatch(addToCart(item));
    };

    const handleRemove = (id) => {
        dispatch(removeFromFavorites(id));
    };

    if (favorites.length === 0) {
        return (
            <p className="text-center mt-8 text-gray-500">
                You have no favorite items.
            </p>
        );
    }

    if (favorites.length === 0) return <p className="p-4">No favorites yet</p>;

    return (
        <div className="p-4">
            {favorites.map(item => (
                <div key={item.id} className="flex items-center justify-between p-4 mb-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                        <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg border border-gray-100" />
                        <div>
                            <h2 className="font-semibold text-gray-800 text-base">{item.title}</h2>
                            <p className="text-green-600 font-semibold mt-1">${item.price}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleAddToCart(item)}
                            className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                        >
                            Add to cart
                        </button>
                        <button
                            onClick={() => handleRemove(item.id)}
                            className="bg-red-50 hover:bg-red-100 text-red-500 hover:text-red-600 text-sm font-medium px-4 py-2 rounded-lg border border-red-200 transition-colors"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
