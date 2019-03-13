import React, { FC } from 'react';
import { getDateStrFromSeconds } from '../../../utls';
import Table, { ITableProps, TableCell, TableLink, TableRow } from '../Table';

interface IProps extends ITableProps {
}

const TransactionTable: FC<IProps> = ({
  title,
  headers,
}) => (
  <Table
    title={title}
    headers={headers}
  >
    <p>...</p>
  </Table>
);

export default TransactionTable;
