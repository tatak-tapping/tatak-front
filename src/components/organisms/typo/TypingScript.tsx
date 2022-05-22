import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ScriptContext } from 'context/ScriptContext';
import { inko } from 'typo/KoreanInputMethod';

interface props{
  style:any
}

function TypingScript({ style }:props) {
  const script = useContext(ScriptContext);
  
  const text = script.text.split('');

  console.log(script);

  return (
    <div style={style}>
    <ul style={{ listStyleType: 'none', overflow: 'hidden'}}>
      {
        <li className="word">
          {
            text.map((char, index) => {
              //입력된 char
              const isCorrect = char === script.userInput[index];
              let className;
              if (index < script.userInput.length) {
                className = isCorrect ? "correct" : "wrong";
                if (!isCorrect) char = script.userInput[index];
              }
              //현재 char
              else if (script.userInput.length === index) {
                className = 'cursor';
                if (script.language === 'korean' && script.koreanBuffer.length > 0) {
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
    </ul>
  </div>
  )
}

TypingScript.propTypes = {
  style: PropTypes.object,
};

export default React.memo(TypingScript);