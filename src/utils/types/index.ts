export enum JoinType{
  KAKAO, TADAK
}

export interface IToken{
  accessToken: string;
  refreshToken : string;
}

export interface IUser{
  id :number;
  email:string;
  nickname:string;
  profileImageUrl:string;
  accessToken:string;
  refreshToken:string;
  joinType:JoinType;
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
  emoji: string;
}

export interface ITopic{
  topicCode: number;
  topicName: string;
  isVisible: boolean;
}

export interface ICategoryAndTopic{
  category: ICategory;
  topics: ITopic[];
}

export enum TypoLength{
  SHORT = "SHORT",
  MEDIUM = "MEDIUM",
  LONG = "LONG"
}

export enum TypoLanguage{
  KOREAN = "KOREAN",
  ENGLISH = "ENGLISH"
}

export enum FontWeight{
  REGULER = "400",
  SEMIBLOD = "700",
  BLOD = "900"
}


export enum FontAlign{
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right"
}

export enum TypoApprovalStatus{
  WAITED,
  APPROVED,
  REJECTED
}

export interface ISelectOption {
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
  languages : TypoLanguage[];
  categoryCodes?: number[];
  topicCodes:number[];
  lengths:TypoLength[];
}

export enum FontFamily{
  Eulyoo1945 = "Eulyoo1945",
  MapoFlowerIsland = "MapoFlowerIsland",
  MapoGoldenPier = "MapoGoldenPier",
  MaruBuri = "MaruBuri",
  SunBatang = "SunBatang",
  NanumMyeongjo = "NanumMyeongjo",
  MinSans = "MinSans",
  ChosunGu = "ChosunGu",
  RIDIBatang = "RIDIBatang",
  KoPubBatang = "KoPubBatang", 
  Hahmlet = "Hahmlet", 
  LeferiBaseType = "LeferiBaseType",
}

export const FontFamilyOption : ISelectOption[] = [
  { value:FontFamily.Eulyoo1945, label: "??????1945" },
  { value:FontFamily.MapoFlowerIsland, label: "????????????" },
  { value:FontFamily.MapoGoldenPier, label: "??????????????????" },
  { value:FontFamily.MaruBuri, label: "????????????" },
  { value:FontFamily.SunBatang, label: "?????????light" },
  { value:FontFamily.NanumMyeongjo, label: "????????????" },
  { value:FontFamily.MinSans, label: "?????????" },
  { value:FontFamily.ChosunGu, label: "???????????????" },
  { value:FontFamily.RIDIBatang, label: "????????????" },
  { value:FontFamily.KoPubBatang, label: "kopub??????" },
  { value:FontFamily.Hahmlet, label: "??????" },
  { value:FontFamily.LeferiBaseType, label: "Leferi Base Type" },
];

export interface IFontOption{
  font: string;
  size: number;
  weight:FontWeight;
  align:FontAlign;
}