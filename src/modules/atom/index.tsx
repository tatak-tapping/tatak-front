import { getCategories } from "api/common";
import { getCategoriesSelector } from "modules/selector";
import { atom } from "recoil";
import { ICategory, IFontOption, ITypo, ITypoOption, IUser } from "utils/types";

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

export const typoTextAtom = atom<ITypo | undefined>({
  key: "typoTextAtom",
  default: undefined
});

export const typoOptionAtom = atom<ITypoOption | undefined>({
  key: "typoOptionAtom",
  default: undefined
});

export const fontOptionAtom = atom<IFontOption | undefined>({
  key: "fontOptionAtom",
  default: undefined
});

export const categoriesAtom = atom<ICategory[] | undefined>({
  key: "categoriesAtom",
  default: undefined
});

export const topicsAtom = atom<IFontOption | undefined>({
  key: "topicsAtom",
  default: undefined
});