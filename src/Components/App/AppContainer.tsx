import React, { FC } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import typography from '../../typography';
import AppPresenter from './AppPresenter';

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${typography};
  a {
    text-decoration: none !important;
  }
`;

const theme = {
  boxShadow: '0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)',
  textEllipsis: {
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
  },
};

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <AppPresenter />
    </>
  </ThemeProvider>
);

export default App;
