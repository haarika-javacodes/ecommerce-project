const API_URL = "https://dummyjson.com";

export async function getProducts() {
  const response = await fetch(`${API_URL}/products?limit=0`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return data.products;
}

export async function getProductById(id) {
  const response = await fetch(`${API_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Product not found");
  }

  const data = await response.json();

  return data;
}

export async function getProductsByCategory(category) {
  const response = await fetch(
    `${API_URL}/products/category/${category}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch related products");
  }

  const data = await response.json();

  return data.products;
}