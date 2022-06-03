import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TypoContext } from 'context/TypoContext';
import { inko } from 'utils/typo/KoreanInputMethod';
import styled from '@emotion/styled';
import { Box } from 'rebass';
import { ERROR, GRAY, PRIMARY, TYPING } from 'styles/colors';
import { IFontOption, TypoLanguage } from 'utils/types';
import { useRecoilValue } from 'recoil';
import { fontOptionAtom } from 'modules/atom';
import 'Font.css';

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
              }
              //현재 char
              else if (script.userInput.length === index) {
                className = 'current';
                let prev = char;
                if (script.language === TypoLanguage.KOREAN && script.koreanBuffer.length > 0) {
                  char = inko.en2ko(script.koreanBuffer);
                }
                if(char === '') className = 'next';
                let cursor = text[script.userInput.length] === " " ? "cursor-space" : "cursor";
                return(
                  <span className={`char ${className}`} key={`${char} ${index}`}>
                    <span className={`${cursor}`}></span>
                    {prev}
                    <span className='typing'>{char}</span>
                  </span>
                )
              }
              //다음 나머지 char
              else if (script.userInput.length < index){
                className = 'next';
              }
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
  font-family: ${props => props.fontOption.font};
  li span{ 
    font-family: ${props => props.fontOption.font};
  }
  font-size: ${props => `${props.fontOption.size}px`};
  font-weight: ${props => props.fontOption.weight};
  text-align: ${props => props.fontOption.align};
  justify-content: ${props => props.fontOption.align};
  display: flex;
  li.word {
    padding: 0 0 0 10px;
    white-space: pre-wrap;
  }
  span{
    position: relative;
    display: inline-block;
  }
  span.correct{
    color :${TYPING['CORRECT']};
  }
  span.wrong{
    color: ${TYPING['WRONG']};
    min-width: auto;
  }
  span > span{
    position: absolute;
  }
  span.current{
    color: rgb(0,0,0,0);
  }
  span.current .typing{
    top: 0px;
    left: 0px;
    color: ${TYPING['CURRENT']};
  }
  span.next{
    color: ${TYPING['NEXT']};
  }
  .cursor{
    width: 2px;
    height: 10px;
    top: 0px;
    left: 0px;
    background-color:red;
  }
  .cursor-space{
    width: 10px;
    height: 2px;
    top: 0px;
    left: 0px;
    background-color:red;
  }
`;