import React, { FC } from 'react';
import { ILoading } from '../../@types/api';
import { IBlock } from '../../@types/block';
import { ImportantText, Title } from '../../Components/Shared';
import TransactionTable from '../../Components/Table/TransactionTable';
import { getDateStrFromSeconds } from '../../utils/format';

export interface IBlockData extends ILoading {
  block: IBlock;
}

const BlockPresenter: FC<IBlockData> = ({
  block: { index, hash, timeStamp, difficulty, nonce, data },
}) => (
  <>
    <Title>Block #{index}</Title>
    <Title>
      <ImportantText>Hash:</ImportantText> {hash}
    </Title>
    <Title>
      <ImportantText>TimeStamp:</ImportantText> {getDateStrFromSeconds(timeStamp)}
    </Title>
    <Title>
      <ImportantText>Difficulty:</ImportantText> {difficulty}
    </Title>
    <Title>
      <ImportantText>Nonce:</ImportantText> {nonce}
    </Title>

    <TransactionTable
      title="Transactions"
      headers={['From', 'Amount', 'To', 'Timestamp', 'See detail']}
      data={data}
    />
  </>
);

export default BlockPresenter;
