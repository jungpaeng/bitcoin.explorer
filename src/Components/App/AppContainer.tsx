import axios from 'axios';
import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { API_URL } from '../../contants';
import typography from '../../typography';
import AppPresenter from './AppPresenter';

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${typography};
  a {
    text-decoration: none !important;
  }
`;

interface IState {
  isLoading: boolean;
}

class App extends Component<{}, IState> {
  public state: IState = {
    isLoading: true,
  };

  public _getData = async() => {
    const request = await axios.get(`${API_URL}/block`);
    console.log(request);
  }

  public componentDidMount() {
    this._getData();
  }

  public render() {
    const { isLoading } = this.state;

    return (
      <>
        <GlobalStyle />
        <AppPresenter isLoading={isLoading}/>
      </>
    );
  }
}

export default App;
