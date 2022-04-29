import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getLocalStorageItem } from 'utils/localStorage';

//export const DEAFULT_URL = "http://133.186.214.175:8081";//임시 api
export const DEAFULT_URL = "http://localhost:8081";//임시 api

const instance = axios.create({
  baseURL: DEAFULT_URL,
});

instance.interceptors.request.use(
  (config:any) => {
    config.headers.Authorization =   "Bearer " + getLocalStorageItem('access_token_tatak');
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

  
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    if (error.response.status === 401) {
      localStorage.remove('access_token_tatak');
      window.location.href = '/login?error=unauthorized';
    }
    if (error.response.status === 403 || error.response.status === 419) {
      localStorage.removeItem('access_token_tatak');
      window.location.href = '/login?error=expired-auth';
    }
    return Promise.reject(error);
  }
);

export default instance;