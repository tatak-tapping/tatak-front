import instance from "./instance";

export interface ITypoFilter{
  languages: [],
  categoryCodes: [],
  topicCodes: [],
  lengths: []
}

export interface PostTypoFilterParams {
  email : string;
  password: string;
  nickname: string;
}

export const getUserTypoFilter = (): Promise<{ data: ITypoFilter }> =>
  instance.get('/users/conditional');

export const putUserTypoFilter = (params: PostTypoFilterParams): Promise<{ data: ITypoFilter }> =>
  instance.put('/users/conditional', params);