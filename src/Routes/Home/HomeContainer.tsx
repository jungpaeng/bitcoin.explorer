import React, { FC } from 'react';
import { IBlock, ITransaction } from '../../@types/block';
import HomePresenter from './HomePresenter';

interface IProps {
  blocks: IBlock[];
  transactions: ITransaction[];
}

const HomeContainer: FC<IProps> = () => (
  <HomePresenter />
);

export default HomeContainer;
