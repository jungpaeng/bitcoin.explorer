import React, { FC } from 'react';
import styled from 'styled-components';
import { ILoading } from '../../@types/api';
import { IBlock, ITransaction } from '../../@types/block';
import Table from '../../Components/Table';

export interface IHomeData extends ILoading {
  blocks: IBlock[];
  txs: ITransaction[];
}

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
