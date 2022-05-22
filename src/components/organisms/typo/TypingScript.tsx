import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ScriptContext } from 'context/ScriptContext';
import { inko } from 'typo/KoreanInputMethod';

interface props{
  style:any
}

function TypingScript({ style }:props) {
  const script = useContext(ScriptContext);

  console.log(script);

  return (
    <div className="typingTextArea noselect" style={style}>
    <ul style={{ listStyleType: 'none', overflow: 'hidden', }}>
      {
        <li className="word">
          {
            [script.text].map((char, index) => {
              const isCorrect = char === script.userInput[index];
              let className;
              if (index < script.userInput.length) {
                className = isCorrect ? "correct" : "wrong";
                if (isCorrect === false) {
                  char = script.userInput[index];
                  if (char === ' ' && script.language === 'korean') char = '   ';
                }
              }
              else if (script.userInput.length === index) {
                className = 'cursor';
                if (script.language === 'korean') {
                  if (script.koreanBuffer.length !== 0)
                    char = inko.en2ko(script.koreanBuffer);
                }
              }
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