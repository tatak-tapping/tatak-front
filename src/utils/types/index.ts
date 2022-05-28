export enum JoinType{
  KAKAO, TADAK
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

export enum TypoLength{
  SHORT = "짧은 글",
  MEDIUM = "중간 글",
  LONG = "긴 글"
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
  id :number;
  email:string;
  nickname:string;
  profileImageUrl:string;
  accessToken:string;
  refreshToken:string;
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
  { value:FontFamily.Eulyoo1945, label: "을유1945" },
  { value:FontFamily.MapoFlowerIsland, label: "마포꽃섬" },
  { value:FontFamily.MapoGoldenPier, label: "마포금빛나루" },
  { value:FontFamily.MaruBuri, label: "마루부리" },
  { value:FontFamily.SunBatang, label: "순바탕light" },
  { value:FontFamily.NanumMyeongjo, label: "나눔명조" },
  { value:FontFamily.MinSans, label: "민산스" },
  { value:FontFamily.ChosunGu, label: "조선굴림체" },
  { value:FontFamily.RIDIBatang, label: "리디바탕" },
  { value:FontFamily.KoPubBatang, label: "kopub바탕" },
  { value:FontFamily.Hahmlet, label: "함렛" },
  { value:FontFamily.LeferiBaseType, label: "Leferi Base Type" },
];

export interface IFontOption{
  font: string;
  size: number;
  weight:FontWeight;
  align:FontAlign;
}