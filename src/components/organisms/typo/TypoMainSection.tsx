import { Flex } from "rebass";
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import useTyping, { CharStateType, PhaseType } from "react-typing-game-hook";
import { useRecoilState, useRecoilValue } from "recoil";
import { typoOptionAtom, typoAtom } from "modules/atom";
import { getArticle } from "api/common";
import { ITypo, ITypoOption, TypoLanguage } from "utils/types";
import { useNavigate } from "react-router-dom";
import { inko, KoreanInputMethod } from "typo/KoreanInputMethod";
import TypingArticle from "./TypingArticle";
import { TypoContext } from "context/ScriptContext";

const TypoMainSection = () => {
  const [userInput, setUserInput] = useState("");
  const [koreanBuffer, setKoreanBuffer] = useState("");

  const [typo, setTypo] = useRecoilState<ITypo>(typoAtom);
  const text = typo?.contents ?? "";
  const language = typo?.language;

 const onKeyDown = useCallback((event) => {
    event.preventDefault();
    if (language === TypoLanguage.KOREAN) {
      setKoreanBuffer((buf) => {
        const { nextUserInput, nextBuf } = KoreanInputMethod(buf, event, userInput);
        if (nextUserInput !== userInput) {
          setUserInput(nextUserInput);
        }
        return nextBuf;
      });
      return;
    }
    
    setUserInput((text) => {
      if (event.key === 'Backspace') return text.slice(0, -1);
      if (event.key === 'Enter') return text.concat('\n');
      if (event.key.length > 1) return text;
      return text.concat(event.key);
    });
  }, [language, userInput]);

  useEffect(() => {
    document.body.addEventListener("keydown", onKeyDown);
    return () => document.body.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return(
    <Flex justifyContent="center" alignItems="center" marginLeft="auto"  marginRight="auto" width={1000} height={600} max-height={600} overflowY="auto">
       <TypoContext.Provider value={{ text, userInput, language, koreanBuffer }}>
        <TypingArticle />
      </TypoContext.Provider>
    </Flex>
  )
}

export default TypoMainSection;