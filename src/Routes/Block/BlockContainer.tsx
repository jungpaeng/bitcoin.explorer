import axios from 'axios';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IBlock } from '../../@types/block';
import { API_URL, URL_BLOCKS } from '../../contants';
import BlockPresenter, { IBlockData } from './BlockPresenter';

interface IMatchParams {
  index: string;
}

type Props = RouteComponentProps<IMatchParams>;
type State = IBlockData;

class BlockContainer extends Component<Props, State> {
  public state: State = {
    block: {
      amount: 0,
      data: [],
      difficulty: 0,
      hash: '',
      index: 0,
      nonce: 0,
      prevHash: '',
      timeStamp: 0,
    },
    isLoading: false,
  };

  public componentDidMount() {
    const { match:{ params:{ index } } } = this.props;
    this._getBlockData(index);
  }

  public _getBlockData = async (index: string) => {
    const { data: block } = await axios.get<IBlock>(`${API_URL}/${URL_BLOCKS}/${index}`);
    this.setState({
      block,
      isLoading: false,
    });
  }

  public render() {
    return <BlockPresenter {...this.state} />;
  }
}

export default BlockContainer;
