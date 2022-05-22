import { Flex } from "rebass";
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import useTyping, { CharStateType, PhaseType } from "react-typing-game-hook";
import { useRecoilState, useRecoilValue } from "recoil";
import { typoOptionAtom, typoAtom } from "modules/atom";
import { getArticle } from "api/common";
import { ITypo, ITypoOption, TypoLanguage } from "utils/types";
import { useNavigate } from "react-router-dom";
import { inko, KoreanInputMethod } from "utils/typo/KoreanInputMethod";
import TypingArticle from "./TypingArticle";
import { TypoContext } from "context/ScriptContext";

const TypoMainSection = () => {
  const [userInput, setUserInput] = useState("");
  const [koreanBuffer, setKoreanBuffer] = useState("");

  const [typo, setTypo] = useRecoilState<ITypo>(typoAtom);
  //const text = typo?.contents ?? "";
  //const language = typo?.language;
  const text = "관현악이며, 청춘의 것이 위하여서. 바로 황금시대의 이것이야말로 없으면, 힘차게 있는 것은 그들은 뿐이다. 청춘의 인간이 갑 바이며, 이것이다. 우리 모래뿐일 청춘의 청춘은 남는 이상의 힘있다. 피부가 붙잡아 반짝이는 피다. 구하지 밥을 내려온 밝은 돋고, 위하여, 같지 인생에 있는가? 풀밭에 그들의 동력은 속잎나고, 이것이다.꽃이 인생을 용기가 웅대한 피가 피고 방황하여도, 그리하였는가? 이상이 뭇 찾아다녀도, 무한한 청춘에서만 운다. 없으면 그들은 이상의 그들의 부패뿐이다. 영원히 찬미를 위하여 목숨이 원대하고, 않는 관현악이며, 교향악이다. 청춘 피는 평화스러운 봄바람이다.사라지지 힘차게 끓는 사막이다. 가는 크고 없으면 사막이다. 낙원을 이상 바이며, 이상의 청춘 봄바람이다. 쓸쓸한 전인 찾아 황금시대다. 그것은 황금시대의 오아이스도 곳이 교향악이다. 열매를 밥을 사라지지 봄날의 가는 예수는 것이다."
  const language = TypoLanguage.KOREAN;

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