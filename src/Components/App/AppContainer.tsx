import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
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

const App: FC = () => (
  <>
    <GlobalStyle />
    <AppPresenter />
  </>
);

export default App;
