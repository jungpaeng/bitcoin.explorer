import React, { FC } from 'react';
import { IBlock } from '../../@types/block';

export interface IBlockProps {
  blocks: IBlock[];
}

const BlocksPresenter: FC<IBlockProps> = () => (
  <h1>locks + txs</h1>
);

export default BlocksPresenter;
