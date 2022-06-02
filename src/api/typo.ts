import { ITypo, ITypoOption, TypoApprovalStatus, TypoLanguage, TypoLength } from "utils/types";
import instance from "./instance";


export interface PutTypoOptionParams {
  languages : string[];
  categoryCodes?: number[] | [];
  topicCodes:number[];
  lengths:string[];
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


export const getUserTypoFilter = (): Promise<{ data: ITypoOption }> =>
  instance.get('/users/conditional');

export const putUserTypoFilter = (params: PutTypoOptionParams): Promise<{ data: ITypoOption }> =>
  instance.put('/users/conditional', params);

export const postTypoUpload = (params: PostTypoUploadParams): Promise<{ data: ITypo }> =>
  instance.post('/articles', params);