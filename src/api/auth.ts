import instance from './instance';
import { AxiosResponse } from 'axios';
import { IUser } from 'utils/types';

export interface PostCommonParams {
  email : string;
  password: string;
}

export const postCommonLogin = (params: PostCommonParams): Promise<{ data: IUser }> =>
  instance.post('/users/login', params);

export const getKakaoLogin = (kakaoCode:string): Promise<{data: IUser}> =>
  instance.get(`/users/login/kakao?code=${kakaoCode}`);

export const getUser = (id: number) =>
  instance.get(`/users/${id}`);
