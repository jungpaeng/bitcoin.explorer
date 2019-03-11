import sum from 'lodash.sum';
import React, { FC } from 'react';
import styled from 'styled-components';
import { IBlock, ITransaction } from '../../@types/block';
import { BlocksHeader, BlocksRow, Card, TxHeader, TxRow } from '../../Components/Shared';
import { getDateStrFromSeconds } from '../../utls';

export interface IHomeProps {
  blocks: IBlock[];
  transactions: ITransaction[];
}

const TableContainer = styled.div`
  margin: 50px 0 100px;
`;

const HomePresenter: FC<IHomeProps> = ({ blocks, transactions }) => (
  <>
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
  </>
);

export default HomePresenter;
