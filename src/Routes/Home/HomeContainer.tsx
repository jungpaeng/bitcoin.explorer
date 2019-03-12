import axios from 'axios';
import React, { Component } from 'react';
import { IBlock, ITransaction } from '../../@types/block';
import { API_URL } from '../../contants';
import HomePresenter, { IHomeData } from './HomePresenter';

class HomeContainer extends Component<{}, IHomeData> {
  public state: IHomeData = {
    blocks: [],
    isLoading: true,
    txs: [],
  };

  public componentDidMount() {
    this.getHomeData();
  }

  public getHomeData = async () => {
    const { data: blocks } = await axios.get<IBlock[]>(`${API_URL}/blocks/latest`);
    const { data: txs } = await axios.get<ITransaction[]>(`${API_URL}/transactions/latest`);

    this.setState({
      blocks,
      isLoading: false,
      txs,
    });

  }

  public render () {
    return <HomePresenter {...this.state} />;
  }
}

export default HomeContainer;
