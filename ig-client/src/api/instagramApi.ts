import axios from "axios";

const instagramApi = axios.create({
  baseURL: " http://localhost:5000/api/v1",
  withCredentials: true,
});

export default instagramApi;
