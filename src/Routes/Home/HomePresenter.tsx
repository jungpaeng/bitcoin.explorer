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
    <TableContainer>
      <h2>Latest Blocks</h2>
      <Card>
        <BlocksHeader />
        {blocks.map(block => (
          <BlocksRow
            key={block.hash}
            index={block.index}
            hash={block.hash}
            timeStamp={getDateStrFromSeconds(block.timeStamp)}
            difficulty={block.difficulty}
          />
        ))}
      </Card>
    </TableContainer>
    <TableContainer>
      <h2>Latest Transactions</h2>
      <Card>
        <TxHeader />
        {txs.map(transaction => (
          <TxRow
            key={transaction .id}
            id={transaction .id}
            insOuts={`${transaction.txIns.length}/${transaction.txOuts.length}`}
            amount={sum(transaction.txOuts.map(txOut => txOut.amount))}
          />
        ))}
      </Card>
    </TableContainer>
  </>
);

export default HomePresenter;
