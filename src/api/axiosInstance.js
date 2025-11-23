import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  withCredentials: true, // if your backend uses cookies (optional)
});

// Optional: Add interceptors (we will add later)
export default axiosInstance;
