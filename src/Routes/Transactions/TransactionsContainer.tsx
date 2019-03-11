import React, { FC } from 'react';
import TransactionsPresenter, { ITransactionProps } from './TransactionsPresenter';

const TransactionsContainer: FC<ITransactionProps> = (props: ITransactionProps) => (
  <TransactionsPresenter {...props} />
);

export default TransactionsContainer;
