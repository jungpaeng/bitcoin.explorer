import axios from 'axios';
import React, { Component } from 'react';
import { IPaginated, ITransaction } from '../../@types/block';
import { API_URL, URL_TRANSACTIONS } from '../../contants';
import { Omit } from '../../utils/typescript';
import { addSocketEventListener } from '../../utils/ws';
import TransactionsPresenter, { ITransactionsData } from './TransactionsPresenter';

type State = Omit<ITransactionsData, 'setCurrentPage'>;

class BlocksContainer extends Component<{}, State> {
  public state: State = {
    currentPage: 1,
    isLoading: true,
    total: 0,
    totalPages: 0,
    txs: [],
  };

  public componentDidMount() {
    this.getBlocksData();

    addSocketEventListener(this.setStateFromSocket);
  }

  public componentDidUpdate(_: {}, prevState: State) {
    const { currentPage: prevPage } = prevState;
    const { currentPage } = this.state;

    if (prevPage !== currentPage) {
      this.getBlocksData();
    }
  }

  public setStateFromSocket = (message: any) => {
    this.setState((prevState: State) => ({
      ...prevState,
      total: prevState.total += 1,
      txs: [...message[0].data, ...prevState.txs],
    }));
  }

  public getBlocksData = async () => {
    const { data: {
      currentPage, total, totalPages, data: txs,
    } } = await axios.get<IPaginated<ITransaction[]>>(
      `${API_URL}/${URL_TRANSACTIONS}?page=${this.state.currentPage}`,
    );

    this.setState({
      currentPage,
      isLoading: false,
      total,
      totalPages,
      txs,
    });
  }

  public setCurrentPage = (currentPage: number) => {
    this.setState({ currentPage });
  }

  public render() {
    return (
      <TransactionsPresenter
        {...this.state}
        setCurrentPage={this.setCurrentPage}
      />
    );
  }
}

export default BlocksContainer;
