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
  transactions: any[];
}

class App extends Component<{}, IState> {
  public state: IState = {
    blocks: [],
    isLoading: true,
    transactions: [],
  };

  public _getData = async() => {
    const request = await axios.get(`${API_URL}/block`);
    const blocks = request.data.reverse();
    const txs = flatten(blocks.map((block: any) => block.data));

    this.setState({
      blocks,
      isLoading: false,
      transactions: txs,
    });
  }

  public componentDidMount() {
    this._getData();
  }

  public render() {
    const { blocks, isLoading, transactions } = this.state;

    return (
      <>
        <GlobalStyle />
        <AppPresenter
          blocks={blocks}
          isLoading={isLoading}
          transactions={transactions}
        />
      </>
    );
  }
}

export default App;
