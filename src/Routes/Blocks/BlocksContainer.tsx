import React, { FC } from 'react';
import { IBlock } from '../../@types/block';
import BlocksPresenter from './BlocksPresenter';

interface IProps {
  blocks: IBlock[];
}

const BlocksContainer: FC<IProps> = () => (
  <BlocksPresenter />
);

export default BlocksContainer;
