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
                <div key={item.id} className="flex gap-4 items-center">
                    <img src={item.image} className="w-16" alt={item.title} />
                    <div>
                        <p className="text-black">{item.title}</p>
                        <p className="text-black">${item.price} × {item.quantity}</p>
                    </div>

                    <button
                        className="bg-red-500 hover:bg-red-600 text-white"
                        onClick={() => dispatch(removeFromCart(item.id))}

                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
}