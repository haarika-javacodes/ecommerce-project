"use client";

import { useOrders } from "../../context/OrderContext";

export default function OrdersPage() {
  const { orders } = useOrders();

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-600">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="mt-8 bg-white rounded-lg shadow p-6">
            <p className="text-gray-600">
              You have no orders yet.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-6">

            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-lg shadow p-6"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-800">
                    Order #{order.id}
                  </h2>

                  <p className="text-gray-500">
                    {order.date}
                  </p>
                </div>

                <div className="mt-5 space-y-3">
                  {order.items.map((product) => (
                    <div
                      key={product.id}
                      className="flex justify-between border-b pb-3"
                    >
                      <span className="text-gray-700">
                        {product.title}
                      </span>

                      <span className="font-semibold text-gray-800">
                        ${product.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between mt-5 text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}