import { getCategories } from "api/common";
import { getCategoriesSelector } from "modules/selector";
import { atom } from "recoil";
import { FontAlign, FontWeight, ICategory, IFontOption, ITopic, ITypo, ITypoOption, IUser, TypoLanguage } from "utils/types";



export const tokenAtom = atom<string>({
  key: "tokenAtom",
  default: localStorage.getItem("access_token_tatak") ?? sessionStorage.getItem("access_token_tatak"),
});

export const userAtom = atom<IUser>({
  key: "userAtom",
  default: JSON.parse(localStorage?.getItem("tatak_user")) ?? JSON.parse(sessionStorage.getItem("tatak_user"))
});

export const isAuthLoginAtom = atom<boolean>({
  key: "isAuthLogin",
  default: false,
});

export const typoAtom = atom<ITypo | undefined>({
  key: "typoTextAtom",
  default: undefined
});

export const languageAtom = atom<TypoLanguage | undefined>({
  key: "languageAtom",
  default: TypoLanguage.KOREAN
});
export const modalAtom = atom<string | undefined>({
  key: "modalAtom",
  default:undefined
})

export const isOpenModalAtom = atom<boolean>({
  key:"isOpenModalAtom",
  default:false,
})

export const typoOptionAtom = atom<ITypoOption | undefined>({
  key: "typoOptionAtom",
  default: undefined
});

export const fontOptionAtom = atom<IFontOption | undefined>({
  key: "fontOptionAtom",
  default: {
    align:FontAlign.CENTER,
    font: "MapoGoldenPier",
    size: 40,
    weight: FontWeight.REGULER
  }
});

export const tempfontOptionAtom = atom<IFontOption | undefined>({
  key: "tempfontOptionAtom",
  default: {
    align:FontAlign.CENTER,
    font: "MapoGoldenPier",
    size: 40,
    weight: FontWeight.REGULER
  }
});

export const categoriesAtom = atom<ICategory[] | undefined>({
  key: "categoriesAtom",
  default: undefined
});

export const topicsAtom = atom<ITopic[] | undefined>({
  key: "topicsAtom",
  default: undefined
});
