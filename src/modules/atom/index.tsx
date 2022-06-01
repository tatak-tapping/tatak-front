import { getCategories } from "api/common";
import { getCategoriesSelector } from "modules/selector";
import { atom } from "recoil";
import { getSessionStorage } from "utils/storage";
import { getTokenStorage, getUserStorage } from "utils/storageUser";
import { FontAlign, FontWeight, ICategory, ICategoryAndTopic, IFontOption, ISelectOption, ITopic, ITypo, ITypoOption, IUser, TypoLanguage } from "utils/types";



export const tokenAtom = atom<string>({
  key: "tokenAtom",
  default: getTokenStorage()
});

export const userAtom = atom<IUser>({
  key: "userAtom",
  default: getUserStorage()
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

export const userModalAtom = atom<string | undefined>({
  key: "userModalAtom",
  default:undefined
})

export const typoModalAtom = atom<string | undefined>({
  key: "typoModalAtom",
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
  default: getSessionStorage("tadak_font_option") ?? {
    align:FontAlign.CENTER,
    font: "MapoGoldenPier",
    size: 40,
    weight: FontWeight.REGULER
  }
});

export const tempfontOptionAtom = atom<IFontOption | undefined>({
  key: "tempfontOptionAtom",
  default: getSessionStorage("tadak_font_option") ?? {
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

export const categoryWithTopicAtom = atom<ICategoryAndTopic[] | undefined>({
  key: "categoryWithTopicAtom",
  default: undefined
});