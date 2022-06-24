import Inko from 'inko';
const inko = new Inko();

function KoreanInputMethod(buf: string, event: any, userInput: string) {
  if (event.code.includes('Key')) {
    if (inko.en2ko(buf.concat(event.key)).length > 1) {
      const totalBuff = inko.en2ko(buf.concat(inko.ko2en(event.key)));

      return {
        nextUserInput: userInput.concat(totalBuff.slice(0, -1)),
        nextBuf: inko.ko2en(totalBuff.slice(-1)),
      };
    }
    return {
      nextUserInput: userInput,
      nextBuf: buf.concat(inko.ko2en(event.key)),
    };
  }
  if (event.code.includes('Digit')) {
    return {
      nextUserInput: userInput.concat(inko.en2ko(buf.concat(event.key))),
      nextBuf: '',
    };
  }
  if (event.key.length > 1) {
    if (event.key === 'Backspace') {
      if (buf === '') {
        return {
          nextUserInput: userInput.slice(0, -1),
          nextBuf: '',
        };
      }
      return {
        nextUserInput: userInput,
        nextBuf: buf.slice(0, -1),
      };
    }
    if (event.key === 'Enter') {
      return {
        nextUserInput: userInput.concat(inko.en2ko(buf.concat('\n'))),
        nextBuf: '',
      };
    }
    return {
      nextUserInput: userInput,
      nextBuf: buf,
    };
  }
  if (
    [
      ' ',
      '.',
      ',',
      '`',
      '+',
      '=',
      '[',
      ']',
      '/',
      ';',
      ':',
      '"',
      "'",
      '{',
      '}',
      '_',
      '+',
      '\\',
      '|',
      '~',
      '<',
      '>',
      '?',
    ].includes(event.key)
  ) {
    return {
      nextUserInput: userInput.concat(inko.en2ko(buf.concat(event.key))),
      nextBuf: '',
    };
  }

  return {
    nextUserInput: userInput,
    nextBuf: buf.concat(event.key),
  };
}

export { inko, KoreanInputMethod };
