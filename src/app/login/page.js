"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://dummyjson.com/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed");
        return;
      }

      alert("Login successful!");

      console.log("Logged in user:", data);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-8">

        <h1 className="text-3xl font-bold text-blue-600 text-center">
          Login
        </h1>

        <form onSubmit={handleLogin} className="mt-8">

          <label className="block font-semibold text-gray-700">
            Email
          </label>

          <input
            type="username"
            placeholder="Enter your username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-gray-800"
            required
          />

          <label className="block mt-5 font-semibold text-gray-700">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-gray-800"
            required
          />

          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>

        </form>

      </div>
    </main>
  );
}