"use client";

import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useOrders } from "../../context/OrderContext";

export default function CheckoutPage() {
    const { cart, clearCart } = useCart();
    const { addOrder } = useOrders();

    const totalPrice = cart.reduce(
        (total, product) =>
            total + product.price * (product.quantity || 1),
        0
    );
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");

    const handleCheckout = (e) => {
        e.preventDefault();
        const newOrder = {
            id: Date.now(),
            items: cart,
            total: totalPrice,
            date: new Date().toLocaleDateString(),
        };

        addOrder(newOrder);

        alert("Order placed successfully!");

        clearCart();
    };

    return (
        <main className="min-h-screen bg-gray-100 px-6 py-10">
            <div className="max-w-2xl mx-auto">

                <h1 className="text-3xl font-bold text-blue-600">
                    Checkout
                </h1>
                <div className="mt-8 bg-white rounded-lg shadow p-6">
                    <h2 className="text-2xl font-bold text-blue-600">
                        Order Summary
                    </h2>

                    <div className="mt-4 space-y-3">
                        {cart.map((product) => (
                            <div
                                key={product.id}
                                className="flex justify-between border-b pb-3"
                            >
                                <div>
                                    <span className="text-gray-700">
                                        {product.title}
                                    </span>

                                    <p className="text-sm text-blue-600 mt-1">
                                        Quantity: {product.quantity || 1}
                                    </p>
                                </div>

                                <span className="font-semibold text-gray-800">
                                    ${(product.price * (product.quantity || 1)).toFixed(2)}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between mt-5 text-xl font-bold">
                        <span className="text-blue-600">Total</span>
                        <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
                    </div>
                </div>

                <div className="mt-8 bg-white rounded-lg shadow p-8">

                    <form onSubmit={handleCheckout}>

                        <label className="block font-semibold text-gray-700">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-gray-800"
                            required
                        />

                        <label className="block mt-5 font-semibold text-gray-700">
                            Address
                        </label>

                        <textarea
                            placeholder="Enter your address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-gray-800"
                            rows="4"
                            required
                        />

                        <label className="block mt-5 font-semibold text-gray-700">
                            City
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-gray-800"
                            required
                        />

                        <label className="block mt-5 font-semibold text-gray-700">
                            Pincode
                        </label>

                        <input
                            type="text"
                            placeholder="Enter pincode"
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-gray-800"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                        >
                            Place Order
                        </button>

                    </form>

                </div>

            </div>
        </main>
    );
}