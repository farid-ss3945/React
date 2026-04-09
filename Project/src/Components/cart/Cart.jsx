import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart} from '../../Redux/store/cartSlice.jsx';

export function CartPage() {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    if (cart.length === 0) {
        return <p>Cart is empty</p>;
    }

    return (
        <div>
            <h1>Cart</h1>

            {cart.map(item => (
                <div key={item.id} className="flex items-center justify-between p-4 mb-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                        <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg border border-gray-100" />
                        <div>
                            <p className="font-semibold text-gray-800 text-base">{item.title}</p>
                            <p className="text-green-600 font-semibold mt-1">${item.price} <span className="text-gray-400 font-normal">× {item.quantity}</span></p>
                        </div>
                    </div>
                    <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="bg-red-50 hover:bg-red-100 text-red-500 hover:text-red-600 text-sm font-medium px-4 py-2 rounded-lg border border-red-200 transition-colors"
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
}