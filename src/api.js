// src/api.js
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const apiFetch = async (endpoint, options = {}) => {
  const response = await fetch(`${BACKEND_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "API request failed");
  }

  return response.json();
};
