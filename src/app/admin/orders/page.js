"use client";

import { useOrders } from "../../../context/OrderContext";

export default function AdminOrdersPage() {
  const { orders } = useOrders();

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600">
          Order Management
        </h1>

        {orders.length === 0 ? (
          <div className="mt-8 bg-white rounded-lg shadow p-6">
            <p className="text-gray-600">
              No orders have been placed yet.
            </p>
          </div>
        ) : (
          <div className="mt-8 bg-white rounded-lg shadow overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-3">Order ID</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Products</th>
                  <th className="px-4 py-3">Total</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-t">
                    <td className="px-4 py-3 font-semibold">
                      #{order.id}
                    </td>

                    <td className="px-4 py-3">
                      {order.date}
                    </td>

                    <td className="px-4 py-3">
                      {order.items.length}
                    </td>

                    <td className="px-4 py-3 font-semibold">
                      ${order.total.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}