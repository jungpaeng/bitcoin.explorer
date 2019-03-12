import React, { FC } from 'react';
import styled from 'styled-components';
import { ILoading } from '../../@types/api';
import { IBlock, IPaginated } from '../../@types/block';
import Table from '../../Components/Table';
import { Omit } from '../../utils/typescript';

type Pagenated = Omit<IPaginated, 'data' | 'perPage'>;

export interface IBlocsData extends ILoading, Pagenated {
  blocks: IBlock[];
}

const TableContainer = styled.div`
  margin: 50px 0 100px;
`;

const BlocksPresenter: FC<IBlocsData> = ({
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
