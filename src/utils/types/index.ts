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
  SHORT = "짧은 글",
  MEDIUM = "중간 글",
  LONG = "긴 글"
}

export enum TypoLanguage{
  KOREAN = "한국어",
  ENGLISH = "영어"
}

export enum TypoApprovalStatus{
  WAITED,
  APPROVED,
  REJECTED
}

export interface IOption {
  label: string;
  value: string | number | string[];
};

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