import React, { FC } from 'react';
import { ILoading } from '../../@types/api';
import { IBlock, IPaginated } from '../../@types/block';
import Table from '../../Components/Table';
import { Omit } from '../../utils/typescript';

type Pagenated = Omit<IPaginated, 'data' | 'perPage'>;

export interface IBlocksData extends ILoading, Pagenated {
  blocks: IBlock[];
}

const BlocksPresenter: FC<IBlocksData> = ({
  blocks,
  total,
}) => (
  <Table
    title={`All Blocks (${total || 0})`}
    data={blocks.slice(0, 15)}
    headers={['Index', 'Hash', 'Difficulty', 'Amount', 'TimeStamp']}
    selected={['index', 'hash', 'difficulty', 'amount', 'timeStamp']}
    linkPages={['blocks', 'blocks']}
    linkParams={['index', 'index']}
  />
);

export default BlocksPresenter;
