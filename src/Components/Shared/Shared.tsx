import React, { FC } from 'react';
import styled from 'styled-components';

export const Card = styled.div`
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 50px;
  width: 100%;
  min-height: 50vh;
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
              0 3px 6px rgba(0, 0, 0, 0.08);
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Header = styled.div`
  font-weight: 600;
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & * {
    text-align: center;
    width: 15%;
    margin-bottom: 15px;
  }

  & *:nth-child(2) {
    width: 40%;
  }
`;

export const Cell = styled.div`
  padding: 10px 0;
  line-height: 2;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const BlocksHeader: FC = () => (
  <Header>
    <RowContainer>
      <Cell>Index</Cell>
      <Cell>Hash</Cell>
      <Cell>TimeStamp</Cell>
      <Cell>Difficulty</Cell>
    </RowContainer>
  </Header>
);

export const TxHeader: FC = () => (
  <Header>
    <RowContainer>
      <Cell>Amount</Cell>
      <Cell>ID</Cell>
      <Cell>Ins/Outs</Cell>
    </RowContainer>
  </Header>
);

interface IBlockRow {
  index: number;
  hash: string;
  timeStamp: number;
  difficulty: number;
}

export const BlocksRow: FC<IBlockRow> = ({ index, hash, timeStamp, difficulty }) => (
  <RowContainer>
    <Cell>{index}</Cell>
    <Cell>{hash}</Cell>
    <Cell>{timeStamp}</Cell>
    <Cell>{difficulty}</Cell>
  </RowContainer>
);

interface ITxRow {
  id: number;
  insOuts: string;
  amount: number;
}

export const TxRow: FC<ITxRow> = ({ id, insOuts, amount }) => (
  <RowContainer>
    <Cell>{amount}</Cell>
    <Cell>{id}</Cell>
    <Cell>{insOuts}</Cell>
  </RowContainer>
);
