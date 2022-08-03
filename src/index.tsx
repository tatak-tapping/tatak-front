import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from 'styles/global';
import theme from 'styles/theme';
import App from './App';

ReactDOM.render(
  <RecoilRoot>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </RecoilRoot>,
  document.getElementById('root')
);
