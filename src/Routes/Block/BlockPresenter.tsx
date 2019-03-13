import React, { FC } from 'react';
import { ILoading } from '../../@types/api';
import { IBlock } from '../../@types/block';
import { ImportantText, Title } from '../../Components/Shared';
import TransactionTable from '../../Components/Table/TransactionTable';
import { getDateStrFromSeconds } from '../../utls';

export interface IBlockData extends ILoading {
  block: IBlock;
}

const BlockPresenter: FC<IBlockData> = ({ block }) => (
  <>
    <Title>Block #{block.index}</Title>
    <Title>
      <ImportantText>Hash:</ImportantText> {block.hash}
    </Title>
    <Title>
      <ImportantText>TimeStamp:</ImportantText> {getDateStrFromSeconds(block.timeStamp)}
    </Title>
    <Title>
      <ImportantText>Difficulty:</ImportantText> {block.difficulty}
    </Title>
    <Title>
      <ImportantText>Nonce:</ImportantText> {block.nonce}
    </Title>

    <TransactionTable
      title="Transactions"
      headers={['From', 'Amount', 'To', 'Timestamp', 'See detail']}
    />
  </>
);

export default BlockPresenter;
