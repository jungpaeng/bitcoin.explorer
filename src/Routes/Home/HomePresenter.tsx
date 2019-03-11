import React, { FC } from 'react';
import { IBlock, ITransaction } from '../../@types/block';

export interface IHomeProps {
  blocks: IBlock[];
  transactions: ITransaction[];
}

const HomePresenter: FC<IHomeProps> = () => (
  <h1>locks + txs</h1>
);

export default HomePresenter;
