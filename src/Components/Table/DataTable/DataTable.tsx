import React, { FC } from 'react';
import { getDateStrFromSeconds } from '../../../utils/format';
import Table, { ITableProps, TableCell, TableLink, TableRow } from '../Table';

interface IProps extends ITableProps {
  data: Array<{[key: string]: any}>;
  selected: string[];
  linkPages: string[];
  linkParams: string[];
}

const DataTable: FC<IProps> = ({
  title,
  headers,
  data,
  selected,
  linkPages,
  linkParams,
}) => (
  <Table
    title={title}
    headers={headers}
  >
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
  </Table>
);

export default DataTable;
