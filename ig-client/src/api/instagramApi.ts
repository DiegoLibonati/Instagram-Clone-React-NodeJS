import axios, { InternalAxiosRequestConfig } from "axios";

const instagramApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
  withCredentials: true,
  headers: { "Access-Control-Allow-Origin": "*" },
});

instagramApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = document.cookie?.split("=")[1];

  return config;
});

export default instagramApi;
