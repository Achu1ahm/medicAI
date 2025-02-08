import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://172.16.2.172",
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for basic error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;