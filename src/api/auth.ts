import instance from './common';
import { AxiosResponse } from 'axios';

export interface PostCommonParams {
  email : string;
  password: string;
}

export interface IUser{
  uesrId :number;
  email:string;
  nickname:string;
  image:string;
  token:string;
}

export const postCommonLogin = (params: PostCommonParams): Promise<{ data: IUser }> =>
{
  console.log(params);
  return instance.post('/users/login', params);
}

export const getKakaoLogin = (kakaoCode:string): Promise<{data: IUser}> =>{
  return instance.get(`/users/login/kakao?code=${kakaoCode}`);
}

export const getUser = (id: number) =>
  instance.get(`/users/${id}`);
