"use client";

import { useWishlist } from "../../context/WishlistContext";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-600">
          My Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="mt-8 bg-white rounded-lg shadow p-6">
            <p className="text-gray-600">
              Your wishlist is empty.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {wishlist.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow p-4"
              >

                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded"
                />

                <h2 className="mt-4 text-xl font-semibold text-blue-600">
                  {product.title}
                </h2>

                <p className="mt-2 text-gray-600">
                  ${product.price}
                </p>

                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Remove
                </button>

              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}