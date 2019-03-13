import axios from 'axios';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { API_URL } from '../../contants';
import AddressPresenter, { IAddress } from './AddressPresenter';

interface IMatchParams {
  address: string;
}

type Props = RouteComponentProps<IMatchParams>;
type State = IAddress;

class AddressContainer extends Component<Props, State> {
  public state: State = {
    balance: '',
    isLoading: false,
  };

  public componentDidMount() {
    const { match:{ params:{ address } } } = this.props;
    this._getBlockData(address);
  }

  public _getBlockData = async (address: string) => {
    const { data: balance } = await axios.get<string>(`${API_URL}/address/${address}`);
    this.setState({
      balance,
      isLoading: false,
    });
  }

  public render() {
    const { match: { params: { address } } } = this.props;

    return <AddressPresenter {...this.state} address={address} />;
  }
}

export default AddressContainer;
