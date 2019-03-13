import React, { FC } from 'react';
import { ILoading } from '../../@types/api';
import { ImportantText, Title } from '../../Components/Shared';

export interface IAddress extends ILoading {
  balance: string;
}

interface IProps extends IAddress {
  address: string;
}

const AddressPresenter: FC<IProps> = ({ address, balance }) => (
  <>
    <Title>
      <ImportantText>Address:</ImportantText> {address}
    </Title>
    <Title>
      <ImportantText>Balance:</ImportantText> {balance}
    </Title>
  </>
);

export default AddressPresenter;
