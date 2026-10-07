const API_URL = "https://dummyjson.com";

export async function getUsers() {
  const response = await fetch(`${API_URL}/users?limit=0`);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await response.json();

  return data.users;
}