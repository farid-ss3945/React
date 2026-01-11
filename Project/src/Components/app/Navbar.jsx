import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="text-2xl font-bold">MyShop</div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="hover:text-gray-200">Home</Link>
                        <Link to="/login" className="hover:text-gray-200">Login</Link>
                        <Link to="/register" className="hover:text-gray-200">Register</Link>
                        <Link to="/cart" className="hover:text-gray-200">Cart</Link>
                        <Link to="/favorites" className="hover:text-gray-200">Favorites</Link>
                    </div>

                    {/* Hamburger button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-blue-600 px-2 pt-2 pb-4 space-y-1">
                    <Link to="/" className="block px-3 py-2 rounded hover:bg-blue-500">Home</Link>
                    <Link to="/login" className="block px-3 py-2 rounded hover:bg-blue-500">Login</Link>
                    <Link to="/register" className="block px-3 py-2 rounded hover:bg-blue-500">Register</Link>
                    <Link to="/cart" className="block px-3 py-2 rounded hover:bg-blue-500">Cart</Link>
                    <Link to="/favorites" className="block px-3 py-2 rounded hover:bg-blue-500">Favorites</Link>
                </div>
            )}
        </nav>
    );
}
