import React, { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
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

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
  font-size: 14px;
  text-align: center;

  & + & {
    border-top: 1px solid rgba(0, 0, 0, 0.15);
  }

  & * {
    width: 15%;
    padding-right: 10px;
  }

  & *:nth-child(2) {
    width: 40%;
  }
`;

export const TableCell = styled.div`
  ${({ theme }) => theme.textEllipsis};
`;

export const TableLink = styled(Link)`
  ${({ theme }) => theme.textEllipsis};
  color: #2196f3;
`;

export interface ITableProps {
  title: string;
  headers: string[];
}

interface IProps extends ITableProps{
  children: ReactNode;
}

const Table: FC<IProps> = ({
  title,
  headers,
  children,
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
      <TableData>
        {children}
      </TableData>
    </TableCard>
  </>
);

export default Table;
