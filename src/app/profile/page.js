"use client";
import { useState } from "react";
export default function ProfilePage() {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("Emily");
  const [username, setUsername] = useState("emilys");
  const [email, setEmail] = useState("emily@example.com");
  const handleProfileSave = () => {
    setEditing(false);
    alert("Profile updated successfully!");
  };
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-600">
          My Profile
        </h1>

        <div className="mt-8 bg-white rounded-lg shadow p-8">

          <div className="mb-6">
            <label className="block font-semibold text-gray-700">
              Name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              readOnly={!editing}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-gray-800 bg-gray-100"
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold text-gray-700">
              Username
            </label>

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              readOnly={!editing}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-gray-800 bg-gray-100"
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold text-gray-700">
              Email
            </label>

            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              readOnly={!editing}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-gray-800 bg-gray-100"
            />
          </div>

          <button
            onClick={() => {
              if (editing) {
                handleProfileSave();
              } else {
                setEditing(true);
              }
            }}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            {editing ? "Save Profile" : "Edit Profile"}
          </button>

        </div>

      </div>
    </main>
  );
}