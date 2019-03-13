import axios from 'axios';
import React, { Component } from 'react';
import { IBlock, ITransaction } from '../../@types/block';
import { API_URL, URL_BLOCKS, URL_TRANSACTIONS } from '../../contants';
import { addSocketEventListener } from '../../utils/ws';
import HomePresenter, { IHomeData } from './HomePresenter';

class HomeContainer extends Component<{}, IHomeData> {
  public state: IHomeData = {
    blocks: [],
    isLoading: true,
    txs: [],
  };

  public componentDidMount() {
    this.getHomeData();

    addSocketEventListener(this.setStateFromSocket);
  }

  public setStateFromSocket = (message: any) => {
    this.setState((prevState: IHomeData) => ({
      ...prevState,
      blocks: [...message, ...prevState.blocks],
      txs: [...message[0].data, ...prevState.txs],
    }));
  }

  public getHomeData = async () => {
    const { data: blocks } = await axios.get<IBlock[]>(`${API_URL}/${URL_BLOCKS}/latest`);
    const { data: txs } = await axios.get<ITransaction[]>(`${API_URL}/${URL_TRANSACTIONS}/latest`);

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
