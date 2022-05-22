import { Flex } from "rebass";
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import useTyping, { CharStateType, PhaseType } from "react-typing-game-hook";
import { useRecoilState, useRecoilValue } from "recoil";
import { typoOptionAtom, typoTextAtom } from "modules/atom";
import { getArticle } from "api/common";
import { ITypo, ITypoOption } from "utils/types";
import { useNavigate } from "react-router-dom";
import { inko, KoreanInputMethod } from "typo/KoreanInputMethod";
import TypingArticle from "./TypingArticle";
import { ScriptContext } from "context/ScriptContext";

  const TypoMainSection = () => {
  const [text, setText] = useState("정말로 책임이 있는 권력자에게 소리를 내지를 수가 없기에 우리가 비난을 해도 가장 너그럽게 보아주리라 확신하는 사람에게 화를 낸다. 우리가 사랑하는 사람에게 퍼붓는 비난들은 딱히 이치에 닿지 않는다. 세상 다른 어떤 사람에게도 그런 부당한 말들우리는 정말로 책임이 있는 권력자에게 소리를 내지를 수가 없기에 우리가 비난을 해도 가장 너그렵게 보아주리라 확신하는 사람에게 화를 낸다. 우리가 사랑하는 사람에게 퍼붓는 비난들은 딱히 이치에 닿지 않는다. 세상 다른 어떤 사람에게도 그런 부당한 말들우리는 정말로 책임이 있는 권력자에게 소리를 내지를 수가 없기에 우리가 비난을 해도 가장 너그럽게 보아주리라 확신하는 사람에게 화를 낸다. 우리가 사랑하는 사람에게 퍼붓는 비난들은 딱히 이치에 닿지 않는다. 세상 다른 어떤 사람에게도 그런 부당한 말들우리는 정말로 책임이 있는 권력자에게 소리를 내지를 수가 없기에 우리가 비난을 해도 가장 너그럽게 보아주리라 확신하는 사람에게 화를 낸다. 우리가 사랑하는 사람에게 퍼붓는 비난들은 딱히 이치에 닿지 않는다. ");
  //const [text, setText] = useState("On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue") 
  const [userInput, setUserInput] = useState("");
  const [language] = useState("korean");
  const [koreanBuffer, setKoreanBuffer] = useState("");

 const onKeyDown = useCallback((event) => {
    event.preventDefault();
    if (language === 'korean') {
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
       <ScriptContext.Provider value={{ text, userInput, language, koreanBuffer }}>
        <TypingArticle />
      </ScriptContext.Provider>
    </Flex>
  )
}

export default TypoMainSection;