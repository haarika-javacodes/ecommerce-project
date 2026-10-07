"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-600">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="mt-8 bg-white rounded-lg shadow p-6">
            <p className="text-gray-600">
              Your cart is empty.
            </p>
          </div>
        ) : (
          <>
            <div className="mt-8 space-y-4">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow p-4 flex items-center gap-6"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-24 h-24 object-cover rounded"
                  />

                  <div>
                    <h2 className="text-xl font-semibold text-blue-600">
                      {product.title}
                    </h2>

                    <p className="text-gray-600 mt-2">
                      ${product.price}
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="font-semibold text-blue-600">
                        Quantity:
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(product.id, (product.quantity || 1) - 1)
                        }
                        className="bg-gray-200 text-blue-600 px-3 py-1 rounded-lg text-lg font-bold"
                      >
                        -
                      </button>

                      <span className="font-semibold text-blue-800">
                        {product.quantity || 1}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(product.id, (product.quantity || 1) + 1)
                        }
                        className="bg-gray-200 text-blue-600 px-3 py-1 rounded-lg text-lg font-bold"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="mt-3 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-right">
              <p className="text-2xl font-bold text-blue-600">
                Total: $
                {cart.reduce(
                  (total, product) =>
                    total + product.price * (product.quantity || 1),
                  0
                ).toFixed(2)}
              </p>
            </div>

            <Link
              href="/checkout"
              className="inline-block mt-8 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Proceed to Checkout
            </Link>
          </>
        )}
      </div>
    </main>
  );
}