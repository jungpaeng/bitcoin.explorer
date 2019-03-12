import React, { FC } from 'react';
import styled from 'styled-components';

const TableCard = styled.div`
  background-color: #fff;
  width: 100%;
  margin-bottom: 40px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  &:last-child {
    margin-bottom: 0;
  }
`;

const TableHeader = styled.header`
  border-bottom: 2px solid rgba(0, 0, 0, 0.15);
`;

const TableData = styled.div`
  width: 100%;
`;

const HeaderItem = styled.span`
  font-weight: 600;
  color: #333333;
  ${({ theme }) => theme.textEllipsis};
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
  font-size: 14px;

  & * {
    width: 15%;
  }

  & *:nth-child(2) {
    width: 40%;
  }
`;

interface IProps {
  title: string;
  headers: string[];
  data: Array<{[key: string]: any}>;
}

const Table: FC<IProps> = ({
  title,
  headers,
  data,
}) => (
  <>
    <h2>{title}</h2>
    <TableCard>
      <TableHeader>
        <TableRow>
          {headers.map((header, index) => (
              <HeaderItem key={index}>{header}</HeaderItem>
            ))}
        </TableRow>
      </TableHeader>
    </TableCard>
  </>
);

export default Table;
