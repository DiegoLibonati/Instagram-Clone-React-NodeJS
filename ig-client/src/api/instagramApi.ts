import axios, { InternalAxiosRequestConfig } from "axios";

const instagramApi = axios.create({
  baseURL: " http://localhost:5000/api/v1",
  withCredentials: true,
});

instagramApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = document.cookie?.split("=")[1];

  return config;
});

export default instagramApi;
