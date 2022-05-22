import { createContext } from 'react';
import { TypoLanguage } from 'utils/types';

interface TypoContextState{
  text: string;
  userInput: string;
  language:  TypoLanguage;
  koreanBuffer: string;
}

const TypoContext = createContext({} as TypoContextState);

export { TypoContext };