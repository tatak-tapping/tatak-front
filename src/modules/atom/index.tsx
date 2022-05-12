import { atom } from "recoil";
import { IFontOption, ITypo, ITypoOption, IUser } from "utils/types";

export const tokenAtom = atom<string>({
  key: "tokenAtom",
  default: localStorage.getItem("access_token_tatak"),
});

export const userAtom = atom<IUser>({
  key: "userAtom",
  default: null,
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