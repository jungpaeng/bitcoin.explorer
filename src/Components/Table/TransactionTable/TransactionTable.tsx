import React, { FC } from 'react';
import { ITransaction } from '../../../@types/block';
import { getDateStrFromSeconds } from '../../../utls';
import Table, { ITableProps, TableCell, TableLink, TableRow } from '../Table';

interface IProps extends ITableProps {
  data: ITransaction[];
}

const TransactionTable: FC<IProps> = ({
  title,
  headers,
  data,
}) => (
  <Table
    title={title}
    headers={headers}
  >
    {data.map(({ from, to, amount, timeStamp, id }, index) => (
      <TableRow key={index}>
        <TableLink to={`/addresses/${from}`}>{from}</TableLink>
        <TableCell>{amount}</TableCell>
        <TableLink to={`/addresses/${to}`}>{to}</TableLink>
        <TableCell>{getDateStrFromSeconds(timeStamp)}</TableCell>
        <TableLink to={`/transactions/${id}`}>Link</TableLink>
      </TableRow>
    ))}
  </Table>
);

export default TransactionTable;
