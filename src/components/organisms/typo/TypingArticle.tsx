import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TypoContext } from 'context/ScriptContext';
import { inko } from 'utils/typo/KoreanInputMethod';
import styled from '@emotion/styled';
import { Box } from 'rebass';
import { ERROR, GRAY, PRIMARY } from 'styles/colors';
import { IFontOption, TypoLanguage } from 'utils/types';
import { useRecoilValue } from 'recoil';
import { fontOptionAtom } from 'modules/atom';

function TypingArticle() {
  const script = useContext(TypoContext);
  const text = script.text.split('');
  const fontOption = useRecoilValue(fontOptionAtom);

  return (
    <>
    <StyledArticle fontOption={fontOption}>
      {
        <li className="word">
          {
            text.map((char, index) => {
              //입력된 char
              const isCorrect = char === script.userInput[index];
              let className;
              if (index < script.userInput.length) {
                className = isCorrect ? "correct" : "wrong";
                if (!isCorrect && script.userInput[index] != ' ') char = script.userInput[index];
              }
              //현재 char
              else if (script.userInput.length === index) {
                className = 'current';
                if (script.language === TypoLanguage.KOREAN && script.koreanBuffer.length > 0) {
                  //buffer 이용해서 한글로 바꿈
                  char = inko.en2ko(script.koreanBuffer);
                }
              }
              //다음 char
              else if (script.userInput.length < index)
                className = 'next';
              return (
                <span className={`char ${className}`} key={`${char} ${index}`}>{char}</span>
              )
            })
          }
        </li>
      }
    </StyledArticle>
    </>
  )
}

export default React.memo(TypingArticle);


const StyledArticle = styled.ul<{fontOption:IFontOption}>`
  list-style-type: none;
  /* overflow: 'hidden'; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  font-family: ${props => props.fontOption.font};
  font-size: ${props => `${props.fontOption.size}px`};
  font-weight: ${props => props.fontOption.weight};
  text-align: ${props => props.fontOption.align};
  li.word {
    padding: 0 0 0 10px;
    float: left;
    text-align: -webkit-match-parent;
    white-space: pre-wrap;
  }
  span.correct{
    color: ${GRAY[2]};
  }
  span.wrong{
    color: ${ERROR};
    min-width: auto;
  }
  span.current{
    color: ${GRAY[4]};
  }
  span.next{
    color: ${PRIMARY[40]};
  }
`;