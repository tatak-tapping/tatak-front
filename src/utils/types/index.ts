export interface IUser{
  id :number;
  email:string;
  nickname:string;
  profileImageUrl:string;
  accessToken:string;
  refreshToken:string;
}

export interface IAuthor{
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
}

export interface ICategory{
  categoryCode: number;
  categoryName: string;
}

export interface ITopic{
  topicCode: number;
  topicName: string;
  isVisible: boolean;
}

export enum TypoLength{
  SHORT,
  MEDIUM,
  LONG
}

export enum TypoLanguage{
  KOREAN,
  ENGLISH
}

export enum TypoApprovalStatus{
  WAITED,
  APPROVED,
  REJECTED
}

export interface ITypo{
  articleNo: number;
  author: IAuthor;
  category:ICategory;
  topic: ITopic;
  title: string;
  language: TypoLanguage;
  writer: string;
  publicationMedia: string;
  publicationDate: string;
  contents:string;
  length: TypoLength,
  approvalStatus: TypoApprovalStatus,
  createAt: string;
}

export interface ITypoOption{
  id :number;
  email:string;
  nickname:string;
  profileImageUrl:string;
  accessToken:string;
  refreshToken:string;
}

export interface IFontOption{
  id :number;
  email:string;
  nickname:string;
  profileImageUrl:string;
  accessToken:string;
  refreshToken:string;
}