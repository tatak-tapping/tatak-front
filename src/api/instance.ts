import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getLocalStorageItem } from 'utils/localStorage';

//export const DEAFULT_URL = "http://133.186.214.175:8081";//임시 api
export const DEAFULT_URL = "http://localhost:8081";//임시 api

const instance = axios.create({
  baseURL: DEAFULT_URL,
  withCredentials: true,
});

instance.interceptors.request.use(
  (config:AxiosRequestConfig) => {
    return{
      ...config,
      headers :{
        Authorization: 'Bearer TOKEN',
      }
    }
  },
  (error:AxiosError) => {
    console.log(error);
    return Promise.reject(error);
  }
);
  
instance.interceptors.response.use(
  (response:AxiosResponse) => {
    if (response.status >= 200 && response.status < 300) {
      return response
    }
    return Promise.reject(response);
  },
  (error:AxiosError) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;