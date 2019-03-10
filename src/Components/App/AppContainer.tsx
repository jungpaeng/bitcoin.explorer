import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import AppPresenter from './AppPresenter';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

class App extends React.Component {
  public render() {
    return (
      <>
        <GlobalStyle />
        <AppPresenter />
      </>
    );
  }
}

export default App;
