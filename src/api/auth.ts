import instance from './common';
import { AxiosResponse } from 'axios';

export interface PostCommonParams {
  email : string;
  password: string;
}
interface PostKakaoParams {
  code : string;
  redirect_uri: string;
}

export interface IUser{
  uesrId :number;
  email:string;
  nickname:string;
  image:string;
  token:string;
}

export const postCommonLogin = (params: PostCommonParams): Promise<AxiosResponse<{ data: IUser }>> =>
  instance.post('/users/login', params);

export const postKakaoLogin = (kakaoCode:string): Promise<AxiosResponse<{ data: IUser }>> =>{
  const params : PostKakaoParams = {
    code: kakaoCode,
    redirect_uri : "http://localhost:8080/users/login/kakao"
  };
  
  return instance.post('/users/login/kakao', params);
}

export const getUser = (id: number) =>
  instance.get(`/users/${id}`);
