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
                <div key={item.id} className="flex items-center justify-between mb-2 border p-2 rounded">
                    <div className="flex items-center gap-4">
                        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                        <div>
                            <h2 className="font-bold text-black">{item.title}</h2>
                            <p className="font-bold text-black">${item.price}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-green-600 text-white px-3 py-1 mt-2"
                    >
                        Add to cart
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white"
                        onClick={() => handleRemove(item.id)}
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
}
