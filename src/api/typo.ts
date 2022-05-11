import { ICategory, ITopic, ITypo, TypoApprovalStatus, TypoLanguage, TypoLength } from "utils/types";
import instance from "./instance";

export interface ITypoFilter{
  languages: TypoLanguage;
  categoryCodes: ICategory;
  topicCodes: ITopic;
  lengths: TypoLength;
}

export interface PutTypoFilterParams {
  languages : TypoLanguage[];
  categoryCodes :ICategory[];
  topicCodes : ITopic[];
  lengths : TypoLength[];
}

export interface PostTypoParams{
  category: number;
  topic: number;
  title: string;
  language: TypoLanguage;
  writer: string;
  publicationMedia: string;
  publicationDate: string;
  contents: string;
  approvalStatus: TypoApprovalStatus;
}

export const getUserTypoFilter = (): Promise<{ data: ITypoFilter }> =>
  instance.get('/users/conditional');

export const putUserTypoFilter = (params: PutTypoFilterParams): Promise<{ data: ITypoFilter }> =>
  instance.put('/users/conditional', params);

export const postTypo = (params: PostTypoParams) : Promise<{data:ITypo}> => 
  instance.post('/articles', params);