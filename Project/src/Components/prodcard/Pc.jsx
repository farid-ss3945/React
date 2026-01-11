import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Redux/store/cartSlice.jsx';
import { useNavigate } from 'react-router-dom';
import { addToFavorites } from '../../Redux/store/favoritesSlice';

export function ProductCard({ product }) {
    const dispatch = useDispatch();

    return (
        <div className="border rounded-xl shadow-md p-4 flex flex-col items-center bg-white hover:shadow-lg transition-shadow duration-200">
            <img
                src={product.image}
                alt={product.title}
                className="object-cover w-48 h-48 mb-4 rounded-lg"
            />

            <h2 className="font-semibold text-lg text-gray-800 text-center">{product.title}</h2>
            <p className="text-gray-600 font-medium mt-2">AZN {product.price}</p>

            <div className="flex mt-4">
                <button
                    onClick={() => dispatch(addToCart(product))}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                    Add to cart
                </button>

                <button
                    onClick={() => dispatch(addToFavorites(product))}
                    className="ml-2 text-red-500 text-xl hover:text-red-600 transition-colors"
                >
                    ❤️
                </button>
            </div>
        </div>
    );
}