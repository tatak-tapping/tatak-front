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

export const FontSelectOption: ISelectOption[] = [
  { value: "Eulyoo1945", label: "을유1945" },
  { value: "MapoFlowerIsland", label: "마포꽃섬" },
  { value: "MapoGoldenPier", label: "마포금빛나루" },
  { value: "MaruBuri", label: "마루부리" },
  { value: "SunBatang", label: "순바탕light" },
  { value: "NanumMyeongjo", label: "나눔명조" },
  { value: "MinSans", label: "민산스" },
  { value: "ChosunGu", label: "조선굴림체" },
  { value: "RIDIBatang", label: "리디바탕" },
  { value: "KoPubBatang", label: "kopub바탕" },
  { value: "Hahmlet", label: "함렛" },
  { value: "LeferiBaseType", label: "Leferi Base Type" },
];

export interface IFontOption{
  font: string;
  size: number;
  weight:FontWeight;
  align:FontAlign;
}