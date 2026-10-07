"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        alert("Registration successful! Please login.");
        router.push("/login");
    };

    return (
        <main className="min-h-screen bg-gray-100 px-6 py-10">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow p-8">

                <h1 className="text-3xl font-bold text-blue-600 text-center">
                    Register
                </h1>

                <form onSubmit={handleRegister} className="mt-8">

                    <label className="block font-semibold text-gray-700">
                        Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-gray-800"
                        required
                    />

                    <label className="block mt-5 font-semibold text-gray-700">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
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
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-gray-800"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                    >
                        Register
                    </button>
                    <p className="mt-5 text-center text-blue-600">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            Login
                        </Link>
                    </p>

                </form>

            </div>
        </main>
    );
}