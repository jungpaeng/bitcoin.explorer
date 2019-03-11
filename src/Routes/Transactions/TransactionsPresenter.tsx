import sum from 'lodash.sum';
import React, { FC } from 'react';
import styled from 'styled-components';
import { ITransaction } from '../../@types/block';
import { Card, TxHeader, TxRow } from '../../Components/Shared';

export interface ITransactionProps {
  transactions: ITransaction[];
}

const TableContainer = styled.div`
  margin: 50px 0 100px;
`;

const TransactionsPresenter: FC<ITransactionProps> = ({ transactions }) => (
  <TableContainer>
    <h2>Latest Transactions</h2>
    <Card>
      <TxHeader />
      {transactions.map(transaction => (
        <TxRow
          key={transaction .id}
          id={transaction .id}
          insOuts={`${transaction.txIns.length}/${transaction.txOuts.length}`}
          amount={sum(transaction.txOuts.map(txOut => txOut.amount))}
        />
      ))}
    </Card>
  </TableContainer>
);

export default TransactionsPresenter;
