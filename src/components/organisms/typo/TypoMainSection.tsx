import { Flex } from "rebass";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import useTyping, { CharStateType, PhaseType } from "react-typing-game-hook";
import { useRecoilState, useRecoilValue } from "recoil";
import { typoOptionAtom, typoTextAtom } from "modules/atom";
import { getArticle } from "api/common";
import { ITypo, ITypoOption } from "utils/types";


const TypoMainSection = () => {
  const [text, setText] = useState("우리는 정말로 책임이 있는 권력자에게 소리를 내지를 수가 없기에 우리가 비난을 해도 가장 너그럽게 보아주리라 확신하는 사람에게 화를 낸다. 우리가 사랑하는 사람에게 퍼붓는 비난들은 딱히 이치에 닿지 않는다. 세상 다른 어떤 사람에게도 그런 부당한 말들우리는 정말로 책임이 있는 권력자에게 소리를 내지를 수가 없기에 우리가 비난을 해도 가장 너그렵게 보아주리라 확신하는 사람에게 화를 낸다. 우리가 사랑하는 사람에게 퍼붓는 비난들은 딱히 이치에 닿지 않는다. 세상 다른 어떤 사람에게도 그런 부당한 말들우리는 정말로 책임이 있는 권력자에게 소리를 내지를 수가 없기에 우리가 비난을 해도 가장 너그럽게 보아주리라 확신하는 사람에게 화를 낸다. 우리가 사랑하는 사람에게 퍼붓는 비난들은 딱히 이치에 닿지 않는다. 세상 다른 어떤 사람에게도 그런 부당한 말들우리는 정말로 책임이 있는 권력자에게 소리를 내지를 수가 없기에 우리가 비난을 해도 가장 너그럽게 보아주리라 확신하는 사람에게 화를 낸다. 우리가 사랑하는 사람에게 퍼붓는 비난들은 딱히 이치에 닿지 않는다. ");
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
  } = useTyping(text, { skipCurrentWordOnSpace: false, pauseOnError: true });

  // set cursor
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

  //set WPM
  useEffect(() => {
    if (phase === PhaseType.Ended && endTime && startTime) {
      setDuration(Math.floor((endTime - startTime) / 1000));
    } else {
      setDuration(0);
    }
  }, [phase, startTime, endTime]);

  //handle key presses
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
          {text.split("").map((letter, index) => {
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
        {phase !== PhaseType.Ended && isFocused ? (
          <span
            style={{
              left: pos.left,
              top: pos.top
            }}
            className={`caret border-l-2 border-white`}
          >
            &nbsp;
          </span>
        ) : null}
      </div>
      <p className="text-sm">
        {phase === PhaseType.Ended && startTime && endTime ? (
          <>
            <span className="text-green-500 mr-4">
              WPM: {Math.round(((60 / duration) * correctChar) / 5)}
            </span>
            <span className="text-blue-500 mr-4">
              Accuracy: {((correctChar / text.length) * 100).toFixed(2)}%
            </span>
            <span className="text-yellow-500 mr-4">Duration: {duration}s</span>
          </>
        ) : null}
        <span className="mr-4"> Current Index: {currIndex}</span>
        <span className="mr-4"> Correct Characters: {correctChar}</span>
        <span className="mr-4"> Error Characters: {errorChar}</span>
      </p>
    </div>
    </Flex>
  )
}

export default TypoMainSection;