import { css } from '@emotion/react';

const global = css`
  *,
  body {
    box-sizing: border-box;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    letter-spacing: -0.02em;
    font-size: 1em;
    line-height: 150%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button {
    cursor: pointer;
    padding: 0;
    font-size: 1.125em;
    background-color: transparent;
    border: none;
  }
  b {
    font-weight: bold;
    font-family: inherit;
  }
  h1{
    font-size: 2.5em;
  }
  h2{
    font-size: 1.25em;
  }
  caption{
    font-size: 0.875em;
  }
`;

export default global;