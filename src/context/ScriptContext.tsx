import { createContext } from 'react';

const KeyboardContext = createContext({});

interface ContextState{
  text: string;
  userInput: string;
  language:  string;
  koreanBuffer: string;
}

const ScriptContext = createContext({} as ContextState);

export { KeyboardContext, ScriptContext };