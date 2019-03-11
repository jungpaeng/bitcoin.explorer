import axios from 'axios';
import flatten from 'lodash.flatten';
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
  blocks: [];
  isLoading: boolean;
  txs: { [key: string]: any };
}

class App extends Component<{}, IState> {
  public state: IState = {
    blocks: [],
    isLoading: true,
    txs: {},
  };

  public _getData = async() => {
    const request = await axios.get(`${API_URL}/block`);
    const blocks = request.data.reverse();
    const txs = flatten(blocks.map((block: any) => block.data));

    this.setState({
      blocks,
      isLoading: false,
      txs,
    });
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
