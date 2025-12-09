import axios from "axios";

const API = axios.create({
  baseURL: "https://reliestate-4.onrender.com/api", // Change this for production
  withCredentials: true, 
});

// Attach access token to every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
