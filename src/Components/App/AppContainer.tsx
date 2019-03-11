import axios from 'axios';
import flatten from 'lodash.flatten';
import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { IBlock, ITransaction } from '../../@types/block';
import { API_URL, WS_URL } from '../../contants';
import typography from '../../typography';
import { parseMessage } from '../../utls';
import AppPresenter from './AppPresenter';

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${typography};
  a {
    text-decoration: none !important;
  }
`;

interface IState {
  blocks: IBlock[];
  isLoading: boolean;
  transactions: ITransaction[];
}

class App extends Component<{}, IState> {
  public state: IState = {
    blocks: [],
    isLoading: true,
    transactions: [],
  };

  public _connectToWs = () => {
    const ws = new WebSocket(WS_URL);
    ws.addEventListener('message', (message: any) => {
      const parsedMessage = parseMessage(message);

      if (parsedMessage !== null && parsedMessage !== undefined) {
        this.setState((prevState: IState) => ({
          ...prevState,
          blocks: [...parsedMessage, ...prevState.blocks],
          transactions: [...parsedMessage[0].data, ...prevState.transactions],
        }));
      }
    });
  }

  public _getData = async() => {
    const request = await axios.get<IBlock[]>(`${API_URL}/block`);
    const blocks = request.data.reverse();
    const txs = flatten(blocks.map((block: any) => block.data));

    this.setState({
      blocks,
      isLoading: false,
      transactions: txs,
    });
  }

  public componentDidMount() {
    this._connectToWs();
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
