import Link from "next/link";
export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800">
          Admin Dashboard
        </h1>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-600">
              Products
            </h2>
            <p className="mt-3 text-3xl font-bold text-blue-600">
              30
            </p>
            <Link
              href="/admin/products"
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Manage Products
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-600">
              Orders
            </h2>
            <p className="mt-3 text-3xl font-bold text-green-600">
              0
            </p>
            <Link
              href="/admin/orders"
              className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Manage Orders
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-600">
              Customers
            </h2>
            <p className="mt-3 text-3xl font-bold text-purple-600">
              30
            </p>
            <Link
              href="/admin/customers"
              className="inline-block mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
            >
              Manage Customers
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}