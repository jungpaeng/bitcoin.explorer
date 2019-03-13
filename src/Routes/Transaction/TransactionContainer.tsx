import axios from 'axios';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ITransaction } from '../../@types/block';
import { API_URL } from '../../contants';
import TransactionPresenter, { ITransactionData } from './TransactionPresenter';

interface IMatchParams {
  id: string;
}

type Props = RouteComponentProps<IMatchParams>;
type State = ITransactionData;

class TransactionContainer extends Component<Props, State> {
  public state: State = {
    isLoading: false,
    tx: {
      amount: 0,
      from: '',
      id: '',
      timeStamp: 0,
      to: '',
      txIns: [],
      txOuts: [],
    },
  };

  public componentDidMount() {
    const { match:{ params:{ id } } } = this.props;
    this._getTransactionData(id);
  }

  public _getTransactionData = async (id: string) => {
    const { data: tx } = await axios.get<ITransaction>(
      `${API_URL}/transactions/${id}`,
    );
    this.setState({
      isLoading: false,
      tx,
    });
  }

  public render() {
    return <TransactionPresenter {...this.state} />;
  }
}

export default TransactionContainer;
