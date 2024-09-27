// src/api/apiMiddleware.ts
import axios, { AxiosInstance, AxiosResponse } from 'axios';

// Create an Axios instance
const api: AxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2', // Change this to your base URL
  timeout: 5000, // 5 seconds timeout
});

// // Request interceptor middleware
// api.interceptors.request.use(
//   (config: AxiosRequestConfig) => {
//     // Add common headers, such as authentication tokens or content-type
//     const token = localStorage.getItem('token'); // You can get the token from localStorage or any other storage

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     config.headers['Content-Type'] = 'application/json';
//     // You can add more headers here if needed

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Response interceptor middleware
// api.interceptors.response.use(
//   (response: AxiosResponse) => {
//     // You can process the response here, such as handling data or global errors
//     return response;
//   },
//   (error) => {
//     // Here you can handle global errors, like authentication or network errors
//     if (error.response?.status === 401) {
//       // Example: If the response has a 401, you can redirect to login
//       console.log('Not authenticated, redirecting to login');
//     }
//     return Promise.reject(error);
//   }
// );

// Function to make a GET request
export const apiGet = async <T>(url: string, params?: any): Promise<AxiosResponse<T>> => {
  return api.get<T>(url, { params });
};

// Function to make a POST request
export const apiPost = async <T>(url: string, data: any): Promise<AxiosResponse<T>> => {
  return api.post<T>(url, data);
};

// Function to make a PUT request
export const apiPut = async <T>(url: string, data: any): Promise<AxiosResponse<T>> => {
  return api.put<T>(url, data);
};

// Function to make a DELETE request
export const apiDelete = async <T>(url: string): Promise<AxiosResponse<T>> => {
  return api.delete<T>(url);
};
