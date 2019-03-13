import React, { FC } from 'react';
import { ILoading } from '../../@types/api';
import { IPaginated, ITransaction } from '../../@types/block';
import DataTable from '../../Components/Table/DataTable';
import { Omit } from '../../utils/typescript';

type Pagenated = Omit<IPaginated, 'data' | 'perPage'>;

export interface ITransactionsData extends ILoading, Pagenated {
  txs: ITransaction[];
}

const TransactionsPresenter: FC<ITransactionsData> = ({
  txs,
  total,
}) => (
  <DataTable
    title={`All Transactions (${total || 0})`}
    data={txs.slice(0, 15)}
    headers={['Amount', 'Transaction ID', 'Timestamp']}
    selected={['amount', 'id', 'timeStamp']}
    linkPages={['transactions', 'transactions']}
    linkParams={['id', 'id']}
  />
);

export default TransactionsPresenter;
