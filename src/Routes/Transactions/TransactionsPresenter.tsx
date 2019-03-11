import React, { FC } from 'react';
import { ITransaction } from '../../@types/block';

export interface ITransactionProps {
  transactions: ITransaction[];
}

const TransactionsPresenter: FC<ITransactionProps> = () => (
  <h1>locks + txs</h1>
);

export default TransactionsPresenter;
