import React, { FC } from 'react';
import styled from 'styled-components';
import { IBlock } from '../../@types/block';
import { BlocksHeader, BlocksRow, Card } from '../../Components/Shared';
import { getDateStrFromSeconds } from '../../utls';

export interface IBlockProps {
  blocks: IBlock[];
}

const TableContainer = styled.div`
  margin: 50px 0 100px;
`;

const BlocksPresenter: FC<IBlockProps> = ({ blocks }) => (
  <TableContainer>
    <h2>Latest Blocks</h2>
    <Card>
      <BlocksHeader />
      {blocks.map(block => (
        <BlocksRow
          key={block.hash}
          index={block.index}
          hash={block.hash}
          timeStamp={getDateStrFromSeconds(block.timeStamp)}
          difficulty={block.difficulty}
        />
      ))}
    </Card>
  </TableContainer>
);

export default BlocksPresenter;
