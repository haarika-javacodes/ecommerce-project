"use client";

import { useEffect, useState } from "react";
import { getUsers } from "../../../services/userService";


export default function AdminCustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const data = await getUsers();
        setCustomers(data);
      } catch (error) {
        console.error(error);
        setError("Failed to load customers");
      } finally {
        setLoading(false);
      }
    }

    fetchCustomers();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-100 px-6 py-10">
        <p className="text-xl text-gray-700">Loading customers...</p>
      </main>
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
          Customer Management
        </h1>

        <div className="mt-8 bg-white rounded-lg shadow overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-blue-200 text-blue-800">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Username</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-t">
                  <td className="px-4 py-3 text-blue-800">
                    {customer.id}
                  </td>

                  <td className="px-4 py-3 font-semibold text-blue-800">
                    {customer.firstName} {customer.lastName}
                  </td>

                  <td className="px-4 py-3 text-blue-800">
                    {customer.email}
                  </td>

                  <td className="px-4 py-3 text-blue-800">
                    {customer.username}
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