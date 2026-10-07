"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  getProductById,
  getProductsByCategory,
} from "../../../services/productService";
import { useWishlist } from "../../../context/WishlistContext";
import { useCart } from "../../../context/CartContext";

export default function ProductDetails() {
  const params = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addToWishlist } = useWishlist();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProductById(params.id);

        setProduct(data);
        // Fetch related products
        const relatedProductsData = await getProductsByCategory(data.category);
        const filteredRelatedProducts = relatedProductsData.filter(
          (item) => item.id !== data.id
        );

        setRelatedProducts(filteredRelatedProducts.slice(0, 4));
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  if (loading) {
    return (
      <p className="p-10 text-xl">
        Loading product...
      </p>
    );
  }

  if (!product) {
    return (
      <p className="p-10 text-red-600">
        Product not found
      </p>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Product Image */}
          <div>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Product Information */}
          <div>

            <h1 className="text-3xl font-bold text-blue-600">
              {product.title}
            </h1>

            <p className="mt-4 text-gray-600">
              {product.description}
            </p>

            <p className="mt-6 text-2xl font-bold text-blue-700">
              ${product.price}
            </p>

            <p className="mt-3 text-blue-500">
              <strong>Category:</strong> {product.category}
            </p>

            <p className="mt-3 text-gray-700">
              <strong>Rating:</strong> ⭐ {product.rating}
            </p>

            <p className="mt-3 text-blue-700">
              <strong>Stock:</strong> {product.stock}
            </p>
            <div className="mt-6">
              <label className="font-semibold text-blue-700">
                Quantity:
              </label>

              <div className="flex items-center gap-4 mt-2">
                <button
                  onClick={() =>
                    setQuantity((current) => Math.max(1, current - 1))
                  }
                  className="bg-gray-200 px-4 py-2 rounded-lg text-xl text-red-800"
                >
                  -
                </button>

                <span className="text-xl font-semibold text-blue-800">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity((current) =>
                      Math.min(product.stock, current + 1)
                    )
                  }
                  className="bg-gray-200 px-4 py-2 rounded-lg text-xl text-red-800"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => addToCart({ ...product, quantity })}
              className="mt-6 bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
            >
              Add to Cart
            </button>
            <button
              onClick={() => addToWishlist(product)}
              className="mt-4 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700"
            >
              Add to Wishlist
            </button>

          </div>

        </div>

      </div>
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">
            Related Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="bg-white rounded-lg shadow p-4"
              >
                <img
                  src={relatedProduct.thumbnail}
                  alt={relatedProduct.title}
                  className="w-full h-48 object-cover rounded"
                />

                <h3 className="mt-4 font-semibold text-lg text-blue-600">
                  {relatedProduct.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  ${relatedProduct.price}
                </p>

                <Link
                  href={`/products/${relatedProduct.id}`}
                  className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}