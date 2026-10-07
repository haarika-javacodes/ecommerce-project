"use client";

import { useEffect, useState } from "react";
import { getProducts } from "../../../services/productService";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    category: "",
    stock: "",
  });
  const handleAddProduct = (e) => {
    e.preventDefault();

    const product = {
      id: products.length + 1,
      title: newProduct.title,
      price: Number(newProduct.price),
      category: newProduct.category,
      stock: Number(newProduct.stock),
      thumbnail: "https://dummyjson.com/image/200x200",
    };

    setProducts((currentProducts) => [
      ...currentProducts,
      product,
    ]);

    setNewProduct({
      title: "",
      price: "",
      category: "",
      stock: "",
    });

    setShowForm(false);

    alert("Product added successfully!");
  };


  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();

        setProducts(data || []);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to load products");
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <p className="p-10 text-xl">
        Loading products...
      </p>
    );
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

        <h1 className="text-3xl font-bold text-blue-600">
          Product Management
        </h1>

        <p className="mt-2 text-gray-600">
          Manage products in your store.
        </p>
        <button
          onClick={() => setShowForm(!showForm)}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Add Product
        </button>
        {showForm && (
          <div className="mt-6 bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-blue-600">
              Add New Product
            </h2>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="Product name"
                value={newProduct.title}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    title: e.target.value,
                  })
                }
                className="p-3 border border-gray-300 rounded-lg text-gray-800"
                required
              />

              <input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    price: e.target.value,
                  })
                }
                className="p-3 border border-gray-300 rounded-lg text-gray-800"
                required
              />

              <input
                type="text"
                placeholder="Category"
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    category: e.target.value,
                  })
                }
                className="p-3 border border-gray-300 rounded-lg text-gray-800"
                required
              />

              <input
                type="number"
                placeholder="Stock"
                value={newProduct.stock}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    stock: e.target.value,
                  })
                }
                className="p-3 border border-gray-300 rounded-lg text-gray-800"
                required
              />

            </div>

            <button
              type="button"
              onClick={handleAddProduct}
              className="mt-5 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Save Product
            </button>
          </div>
        )}
        {editingProduct && (
          <div className="mt-6 bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-yellow-600">
              Edit Product
            </h2>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                type="text"
                value={editingProduct.title}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    title: e.target.value,
                  })
                }
                className="p-3 border border-gray-300 rounded-lg text-gray-800"
              />

              <input
                type="number"
                value={editingProduct.price}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    price: e.target.value,
                  })
                }
                className="p-3 border border-gray-300 rounded-lg text-gray-800"
              />

              <input
                type="text"
                value={editingProduct.category}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    category: e.target.value,
                  })
                }
                className="p-3 border border-gray-300 rounded-lg text-gray-800"
              />

              <input
                type="number"
                value={editingProduct.stock}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    stock: e.target.value,
                  })
                }
                className="p-3 border border-gray-300 rounded-lg text-gray-800"
              />

            </div>

            <button
              type="button"
              onClick={() => {
                setProducts((currentProducts) =>
                  currentProducts.map((product) =>
                    product.id === editingProduct.id
                      ? {
                        ...editingProduct,
                        price: Number(editingProduct.price),
                        stock: Number(editingProduct.stock),
                      }
                      : product
                  )
                );

                setEditingProduct(null);

                alert("Product updated successfully!");
              }}
              className="mt-5 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Update Product
            </button>
          </div>
        )}

        <div className="mt-8 bg-white rounded-lg shadow overflow-x-auto">

          <table className="w-full text-left">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-gray-800">ID</th>
                <th className="p-4 text-gray-800">Product</th>
                <th className="p-4 text-gray-800">Category</th>
                <th className="p-4 text-gray-800">Price</th>
                <th className="p-4 text-gray-800">Stock</th>
                <th className="p-4 text-gray-800">Actions</th>
              </tr>
            </thead>

            <tbody>
              {(products || []).map((product) => (
                <tr
                  key={product.id}
                  className="border-t"
                >
                  <td className="p-4 text-gray-700">
                    {product.id}
                  </td>

                  <td className="p-4 text-gray-800 font-semibold">
                    {product.title}
                  </td>

                  <td className="p-4 text-gray-600">
                    {product.category}
                  </td>

                  <td className="p-4 text-gray-800">
                    ${product.price}
                  </td>

                  <td className="p-4 text-gray-800">
                    {product.stock}
                  </td>
                  <td className="p-4">
                    <button
                      type="button"
                      onClick={() => setEditingProduct(product)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const confirmDelete = window.confirm(
                          "Are you sure you want to delete this product?"
                        );

                        if (!confirmDelete) return;

                        setProducts((currentProducts) =>
                          currentProducts.filter((item) => item.id !== product.id)
                        );

                        alert("Product deleted successfully!");
                      }}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </main>
  );
}