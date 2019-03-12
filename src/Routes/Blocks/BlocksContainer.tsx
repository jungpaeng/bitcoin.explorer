import axios from 'axios';
import React, { Component } from 'react';
import { IBlock, IPaginated } from '../../@types/block';
import { API_URL } from '../../contants';
import BlocksPresenter, { IBlocsData } from './BlocksPresenter';

type State = IBlocsData;

class BlocksContainer extends Component<{}, State> {
  public state: State = {
    blocks: [],
    currentPage: 1,
    isLoading: true,
    total: 0,
    totalPages: 0,
  };

  public componentDidMount() {
    this.getBlocksData();
  }

  public getBlocksData = async () => {
    const { data: {
      currentPage, total, totalPages, data: blocks,
    } } = await axios.get<IPaginated<IBlock[]>>(
      `${API_URL}/blocks?page=${this.state.currentPage}`,
    );

    this.setState({
      blocks,
      currentPage,
      isLoading: false,
      total,
      totalPages,
    });
  }

  public render() {
    return (
      <BlocksPresenter
        {...this.state}
      />
    );
  }
}

export default BlocksContainer;
