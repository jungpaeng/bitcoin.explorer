import React, { FC } from 'react';
import { ILoading } from '../../@types/api';
import { ITransaction } from '../../@types/block';
import { ImportantText, Title } from '../../Components/Shared';
import { LinkText } from '../../Components/Shared/Shared';
import { URL_ADDRESS } from '../../contants';
import { getDateStrFromSeconds } from '../../utils/format';

export interface ITransactionData extends ILoading {
  tx: ITransaction;
}

const TransactionPresenter: FC<ITransactionData> = ({
  tx: { amount, from, id, timeStamp, to },
}) => (
  <>
    <Title>
      <ImportantText>Transaction:</ImportantText> {id}
    </Title>
    <Title>
      <ImportantText>Amount:</ImportantText> {amount}
    </Title>
    <Title>
      <ImportantText>Timestamp:</ImportantText> {getDateStrFromSeconds(timeStamp)}
    </Title>
    <Title>
      <ImportantText>From:</ImportantText>
      <LinkText to={`/${URL_ADDRESS}/${from}`}>{from}</LinkText>
    </Title>
    <Title>
      <ImportantText>To:</ImportantText>
      <LinkText to={`/${URL_ADDRESS}/${to}`}>{to}</LinkText>
    </Title>
  </>
);

export default TransactionPresenter;
