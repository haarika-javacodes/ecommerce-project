"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getProducts } from "../../services/productService";
import ProductCard from "../../components/products/ProductCard";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  useEffect(() => {
    if (categoryFromUrl) {
      setCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);
  const [sort, setSort] = useState("default");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    setPage(1);
  }, [search, category, maxPrice, minRating, sort]);
  const productsPerPage = 12;

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);
  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) =>
      category === "all" ? true : product.category === category
    )
    .filter((product) =>
      maxPrice === "" ? true : product.price <= Number(maxPrice)
    )
    .filter((product) =>
      minRating === "" ? true : product.rating >= Number(minRating)
    )
    .sort((a, b) => {
      if (sort === "low") {
        return a.price - b.price;
      }

      if (sort === "high") {
        return b.price - a.price;
      }

      if (sort === "rating-high") return b.rating - a.rating;
      if (sort === "rating-low") return a.rating - b.rating;

      if (sort === "name-az") {
        return a.title.localeCompare(b.title);
      }

      if (sort === "name-za") {
        return b.title.localeCompare(a.title);
      }

      return 0;
    });

  const startIndex = (page - 1) * productsPerPage;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  if (loading) {
    return <p className="p-10 text-xl">Loading products...</p>;
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gray-100 px-6 py-10">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-8 text-center">
          <p className="text-xl font-semibold text-red-600">
            {error}
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Products
        </h1>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 mb-8 border border-blue-500 rounded-lg placeholder-blue-500 text-blue-700"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 mb-8 border border-blue-500 rounded-lg text-blue-700"
        >
          <option value="all">All Categories</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
          <option value="smartphones">Smartphones</option>
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full p-3 mb-8 border border-blue-500 rounded-lg text-blue-700"
        >
          <option value="default">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="rating-high">Rating: High to Low</option>
          <option value="rating-low">Rating: Low to High</option>
          <option value="name-az">Name: A to Z</option>
          <option value="name-za">Name: Z to A</option>
        </select>
        <input
          type="number"
          placeholder="Maximum Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full p-3 mb-4 border border-blue-500 rounded-lg text-blue-700"
        />

        <select
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          className="w-full p-3 mb-8 border border-blue-500 rounded-lg text-blue-700"
        >
          <option value="">Minimum Rating</option>
          <option value="1">1 ⭐ and above</option>
          <option value="2">2 ⭐ and above</option>
          <option value="3">3 ⭐ and above</option>
          <option value="4">4 ⭐ and above</option>
        </select>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {currentProducts.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-xl font-semibold text-gray-700">
              No products found.
            </p>
            <p className="mt-2 text-gray-500">
              Try changing your search or filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400"
          >
            Previous
          </button>

          <span className="font-semibold text-blue-600">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>

    </main>
  );
}