import sum from 'lodash.sum';
import React, { FC } from 'react';
import styled from 'styled-components';
import { ILoading } from '../../@types/api';
import { IBlock, ITransaction } from '../../@types/block';
import { BlocksHeader, BlocksRow, Card, TxHeader, TxRow } from '../../Components/Shared';
import Table from '../../Components/Table';
import { getDateStrFromSeconds } from '../../utls';

export interface IHomeData extends ILoading {
  blocks: IBlock[];
  txs: ITransaction[];
}

const TableContainer = styled.div`
  margin: 50px 0 100px;
`;

const HomePresenter: FC<IHomeData> = ({ blocks, txs }) => (
  <>
    <Table
      title="Latest Blocks"
      headers={['Index', 'Hash', 'Amount', 'Difficulty', 'TimeStamp']}
      data={blocks.slice(0, 5)}
      selected={['index', 'hash', 'amount', 'difficulty', 'timeStamp']}
      linkPages={['blocks', 'blocks']}
      linkParams={['index', 'index']}
    />
    <Table
      title="Latest Transactions"
      headers={['Amount', 'Transaction ID', 'TimeStamp']}
      data={txs.slice(0, 5)}
      selected={['amount', 'id', 'timeStamp']}
      linkPages={['transactions', 'transactions']}
      linkParams={['id', 'id']}
    />
  </>
);

export default HomePresenter;
