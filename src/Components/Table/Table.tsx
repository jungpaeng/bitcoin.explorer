import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getDateStrFromSeconds } from '../../utls';

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

const TableCell = styled.div`
  ${({ theme }) => theme.textEllipsis};
`;

const TableLink = styled(Link)`
  color: #2196f3;
`;

interface IProps {
  title: string;
  headers: string[];
  data: Array<{[key: string]: any}>;
  selected: string[];
  linkPages: string[];
  linkParams: string[];
}

const Table: FC<IProps> = ({
  title,
  headers,
  data,
  selected,
  linkPages,
  linkParams,
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
        {data.map((item, index) => (
          <TableRow key={index}>
            {selected.map((key, keyIndex) => {
              if (!!linkPages[keyIndex]) {
                return (
                  <TableLink to={`/${linkPages[keyIndex]}/${item[linkParams[keyIndex]]}`}>
                    {item[key]}
                  </TableLink>
                );
              }
              return (
                  <TableCell key={keyIndex}>
                    {key === 'timeStamp' ?
                      getDateStrFromSeconds(item[key]) :
                      item[key]}
                  </TableCell>
              );

            })}
          </TableRow>
        ))}
      </TableData>
    </TableCard>
  </>
);

export default Table;
