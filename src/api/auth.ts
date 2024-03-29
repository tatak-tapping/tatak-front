import instance, { DEAFULT_URL } from './instance';
import axios, { AxiosResponse } from 'axios';
import { IToken, IUser } from 'utils/types';

export interface PostCommonParams {
  email: string;
  password: string;
}

export interface PostUserParams {
  email: string;
  password: string;
  nickname: string;
}

export interface PutUserParams {
  nickname: string;
  password: string;
}

export interface PostConfirmPasswordParams {
  password: string;
}

export interface PostFindUserParams {
  email: string;
}

export interface PostReissueToken {
  accessToken: string;
  refreshToken: string;
}

export const postRefrshToken = (params: PostReissueToken): Promise<{ data: IToken }> => {
  return instance.post('/jwt/reissue', params);
};

export const postCommonLogin = (params: PostCommonParams): Promise<{ data: IUser }> =>
  instance.post('/users/login', params);

export const getKakaoLogin = (kakaoCode: string): Promise<{ data: IUser }> =>
  instance.get(`/users/login/kakao?code=${kakaoCode}`);

export const getUser = (id: number) => instance.get(`/users/${id}`);

export const postUser = (params: PostUserParams): Promise<{ data: IUser }> =>
  instance.post('/users', params);

export const putUser = (params: PutUserParams): Promise<{ data: IUser }> =>
  instance.put('/users', params);

export const postConfirmPassword = (
  params: PostConfirmPasswordParams
): Promise<{ data: boolean }> => instance.post(`/users/confirm`, params);

export const postFindUser = (params: PostFindUserParams): Promise<{ data: boolean }> =>
  instance.post(`/users/find`, params);
