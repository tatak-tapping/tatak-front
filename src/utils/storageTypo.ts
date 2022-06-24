import { getSessionStorage, setSessionStorage } from './storage';
import { IFontOption, ITypoOption } from './types';

const setTypoOptionStorage = (data: ITypoOption) => {
  setSessionStorage('typo_option_tadak', data);
};

const getTypoOptionStorage = () => {
  return getSessionStorage<ITypoOption>('typo_option_tadak');
};

const setTypoFontStorage = (data: IFontOption) => {
  setSessionStorage('typo_font_tadak', data);
};

const getTypoFontStorage = () => {
  return getSessionStorage<IFontOption>('typo_font_tadak');
};

export { setTypoOptionStorage, getTypoOptionStorage, setTypoFontStorage, getTypoFontStorage };
