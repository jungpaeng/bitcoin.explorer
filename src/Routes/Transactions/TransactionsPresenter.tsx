import React, { FC } from 'react';
import { ILoading } from '../../@types/api';
import { IPaginated, ITransaction } from '../../@types/block';
import Table from '../../Components/Table';
import { Omit } from '../../utils/typescript';

type Pagenated = Omit<IPaginated, 'data' | 'perPage'>;

export interface ITransactionsData extends ILoading, Pagenated {
  txs: ITransaction[];
}

const TransactionsPresenter: FC<ITransactionsData> = ({
  txs,
  total,
}) => (
  <Table
    title={`All Transactions (${total || 0})`}
    data={txs.slice(0, 15)}
    headers={['Amount', 'Transaction ID', 'Timestamp']}
    selected={['amount', 'id', 'timestamp']}
    linkPages={['transactions', 'transactions']}
    linkParams={['id', 'id']}
  />
);

export default TransactionsPresenter;
