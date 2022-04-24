import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const DEAFULT_URL = "http://133.186.214.175:8081";//임시 api
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
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  
    return Promise.reject(response.data);
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