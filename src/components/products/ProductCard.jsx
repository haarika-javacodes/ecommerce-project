import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover rounded"
      />

      <h2 className="mt-4 font-semibold text-lg text-blue-600">
        {product.title}
      </h2>

      <p className="mt-2 text-gray-600">
        ${product.price}
      </p>

      <Link
        href={`/products/${product.id}`}
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}