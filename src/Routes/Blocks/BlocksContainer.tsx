import axios from 'axios';
import React, { Component } from 'react';
import { IBlock, IPaginated } from '../../@types/block';
import { API_URL, URL_BLOCKS } from '../../contants';
import { Omit } from '../../utils/typescript';
import { addSocketEventListener } from '../../utils/ws';
import BlocksPresenter, { IBlocksData } from './BlocksPresenter';

type State = Omit<IBlocksData, 'setCurrentPage'>;

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
      blocks: [...message, ...prevState.blocks],
      total: prevState.total += 1,
    }));
  }

  public getBlocksData = async () => {
    const { data: {
      currentPage, total, totalPages, data: blocks,
    } } = await axios.get<IPaginated<IBlock[]>>(
      `${API_URL}/${URL_BLOCKS}?page=${this.state.currentPage}`,
    );

    this.setState({
      blocks,
      currentPage,
      isLoading: false,
      total,
      totalPages,
    });
  }

  public setCurrentPage = (currentPage: number) => {
    this.setState({ currentPage });
  }

  public render() {
    return (
      <BlocksPresenter
        {...this.state}
        setCurrentPage={this.setCurrentPage}
      />
    );
  }
}

export default BlocksContainer;
