import { Flex } from "rebass";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import useTyping, { CharStateType, PhaseType } from "react-typing-game-hook";
import { useRecoilState, useRecoilValue } from "recoil";
import { typoOptionAtom, typoTextAtom } from "modules/atom";
import { getArticle } from "api/common";
import { ITypo, ITypoOption } from "utils/types";


const TypoMainSection = () => {
  const typoOption = useRecoilValue<ITypoOption>(typoOptionAtom);
  const [typoText, setTypoText ] = useRecoilState<ITypo>(typoTextAtom);
  const [duration, setDuration] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const letterElements = useRef<HTMLDivElement>(null);
  const {
    states: {
      charsState,
      currIndex,
      phase,
      correctChar,
      errorChar,
      startTime,
      endTime
    },
    actions: { insertTyping, deleteTyping, resetTyping }
  } = useTyping('a', { skipCurrentWordOnSpace: false, pauseOnError: true });

  useEffect(() => {
    const getArticleAsync = async () => {
      const {data} = await getArticle();
      console.log(data);
      setTypoText(data);
    };
    getArticleAsync();
  }
  ,[]);

  useEffect(() => {
    if (phase === PhaseType.Ended && endTime && startTime) {
      setDuration(Math.floor((endTime - startTime) / 1000));
    } else {
      setDuration(0);
    }
  }, [phase, startTime, endTime]);
  
  const pos = useMemo(() => {
    if (currIndex !== -1 && letterElements.current) {
      let spanref: any = letterElements.current.children[currIndex];
      let left = spanref.offsetLeft + spanref.offsetWidth - 2;
      let top = spanref.offsetTop - 2;
      return { left, top };
    } else {
      return {
        left: -2,
        top: 2
      };
    }
  }, [currIndex]);

  const handleKeyDown = (letter: string, control: boolean) => {
    if (letter === "Escape") {
      resetTyping();
    } else if (letter === "Backspace") {
      deleteTyping(control);
    } else if (letter.length === 1) {
      insertTyping(letter);
    }
  };

  return(
    <Flex justifyContent="center" alignItems="center" marginLeft="auto"  marginRight="auto" width={1000} height={600} max-height={600} overflowY="auto">
      <div>
        <div
          tabIndex={0}
          onKeyDown={(e) => handleKeyDown(e.key, e.ctrlKey)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`text-xl outline-none relative font-serif`}
        >
          <div
            ref={letterElements}
            className="tracking-wide pointer-events-none select-none mb-4"
            tabIndex={0}
          >
            {'aaaa'.split("").map((letter, index) => {
              let state = charsState[index];
              let color =
                state === CharStateType.Incomplete
                  ? "text-gray-700"
                  : state === CharStateType.Correct
                  ? "text-gray-400"
                  : "text-red-500";
              return (
                <span key={letter + index} className={`${color}`}>
                  {letter}
                </span>
              );
            })}
          </div>
          <span
              style={{
                left: pos.left,
                top: pos.top
              }}
              className={`caret border-l-2 border-white`}
            >
              &nbsp;
            </span>
        </div>
      </div>
    </Flex>
  )
}

export default TypoMainSection;