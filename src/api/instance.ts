import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import moment from "moment";
import { getExpiresTokenStorage, getRefreshTokenStorage, getTokenStorage, setRefreshTokenStorage} from "utils/storageUser";
import { postRefrshToken } from "./auth";

export const DEAFULT_URL = "http://133.186.214.175:8081";//임시 api

const instance = axios.create({
  baseURL: DEAFULT_URL,
  withCredentials: true
});

instance.interceptors.request.use(
  (config:AxiosRequestConfig) => {
    return{
      ...config
    }
  },
  (error:AxiosError) => {
    return Promise.reject(error.response);
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
    if (error.response.status === 401) {
      const originalConfig = error.config;
      return refresh(originalConfig);
    }
    return Promise.reject(error.response);
  }
);

const refresh = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  const accessToken = getTokenStorage();
  const refreshToken = getRefreshTokenStorage();
  const expiresAt = getExpiresTokenStorage();

  if (!(moment(expiresAt).diff(moment()) < 0)) return config;
  if (!(accessToken && refreshToken)) return config;

  const params = {
    accessToken,
    refreshToken
  }

  const { data } = await postRefrshToken(params);
  setRefreshTokenStorage(data.accessToken, data.refreshToken);
  instance.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;

  return config;
};

export default instance;