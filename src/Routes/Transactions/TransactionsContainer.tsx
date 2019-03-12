import axios from 'axios';
import React, { Component } from 'react';
import { IPaginated, ITransaction } from '../../@types/block';
import { API_URL } from '../../contants';
import TransactionsPresenter, { ITransactionsData } from './TransactionsPresenter';

type State = ITransactionsData;

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
  }

  public getBlocksData = async () => {
    const { data: {
      currentPage, total, totalPages, data: txs,
    } } = await axios.get<IPaginated<ITransaction[]>>(
      `${API_URL}/transactions?page=${this.state.currentPage}`,
    );

    this.setState({
      currentPage,
      isLoading: false,
      total,
      totalPages,
      txs,
    });
  }

  public render() {
    return (
      <TransactionsPresenter
        {...this.state}
      />
    );
  }
}

export default BlocksContainer;
