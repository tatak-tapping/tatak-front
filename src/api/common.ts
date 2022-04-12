import axios, { AxiosError } from "axios";

export const DEAFULT_URL = "127.0.0.1:8080";
export const TOKEN = `${localStorage.getItem("access_token_tatak")}`;

const instance = axios.create({
  baseURL: DEAFULT_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config:any) => {
    config.headers.Authorization =   "Bearer " + TOKEN;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

  
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem(TOKEN);
      window.location.href = '/login?error=unauthorized';
    }
    if (error.response.status === 403 || error.response.status === 419) {
      localStorage.removeItem(TOKEN);
      window.location.href = '/login?error=expired-auth';
    }
    return Promise.reject(error);
  }
);

  
export default instance;