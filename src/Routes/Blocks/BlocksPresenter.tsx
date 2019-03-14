import React, { FC } from 'react';
import { ILoading } from '../../@types/api';
import { IBlock, IPaginated } from '../../@types/block';
import Paginated from '../../Components/Paginated/Paginated';
import DataTable from '../../Components/Table/DataTable';
import { Omit } from '../../utils/typescript';

type Pagenated = Omit<IPaginated, 'data' | 'perPage'>;

export interface IBlocksData extends ILoading, Pagenated {
  blocks: IBlock[];
  setCurrentPage: (currentPage: number) => void;
}

const BlocksPresenter: FC<IBlocksData> = ({
  blocks,
  total,
  totalPages,
  setCurrentPage,
}) => (
  <>
    <DataTable
      title={`All Blocks (${total || 0})`}
      data={blocks.slice(0, 15)}
      headers={['Index', 'Hash', 'Difficulty', 'Amount', 'TimeStamp']}
      selected={['index', 'hash', 'difficulty', 'amount', 'timeStamp']}
      linkPages={['blocks', 'blocks']}
      linkParams={['index', 'index']}
    />
    <Paginated
      pageCount={totalPages}
      onPageChange={setCurrentPage}
    />
  </>
);

export default BlocksPresenter;
