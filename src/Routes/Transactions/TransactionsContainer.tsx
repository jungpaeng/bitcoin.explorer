import React, { FC } from 'react';
import { ITransaction } from '../../@types/block';
import TransactionsPresenter from './TransactionsPresenter';

interface IProps {
  transactions: ITransaction[];
}

const TransactionsContainer: FC<IProps> = () => (
  <TransactionsPresenter />
);

export default TransactionsContainer;
