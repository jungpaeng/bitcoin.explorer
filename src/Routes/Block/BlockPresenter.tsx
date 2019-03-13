import React, { FC } from 'react';
import { ILoading } from '../../@types/api';
import { IBlock } from '../../@types/block';

export interface IBlockData extends ILoading {
  block: IBlock;
}

const BlockPresenter: FC<IBlockData> = ({ block }) => (
  <>
    <p>Block #{block.index}</p>
  </>
);

export default BlockPresenter;
