import { ITypo, TypoApprovalStatus, TypoLanguage } from "utils/types";
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

export interface PostTypoUploadParams {
  category:number;
  topic:number;
  title:string;
  language:TypoLanguage;
  approvalStatus:TypoApprovalStatus;
  writer:string;
  publicationMedia:string;
  publicationDate:string;
  contents:string;
}


export const getUserTypoFilter = (): Promise<{ data: ITypoFilter }> =>
  instance.get('/users/conditional');

export const putUserTypoFilter = (params: PostTypoFilterParams): Promise<{ data: ITypoFilter }> =>
  instance.put('/users/conditional', params);

export const postTypoUpload = (params: PostTypoUploadParams): Promise<{ data: ITypo }> =>
  instance.post('/articles', params);