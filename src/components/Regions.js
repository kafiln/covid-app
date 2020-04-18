import React, { useContext, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSortBy, useTable } from 'react-table';
import { ThemeContext } from 'styled-components';
import { KEYS } from '../i18n';

// TODO: Extract it in utils
const stringTovariableName = (prefix, name) =>
  prefix + name.replace(/\s/g, '').replace(/[-]/g, '');

function Regions({ regions }) {
  const data = useMemo(() => regions, [regions]);
  const columns = useMemo(
    () => [
      {
        accessor: (r) => (
          <FormattedMessage
            id={KEYS[`${stringTovariableName('REGIONS_', r.name)}`]}
          ></FormattedMessage>
        ),
        id: 'name',
        Header: <FormattedMessage id={KEYS.REGIONS_NAME}></FormattedMessage>,
      },
      {
        accessor: 'actual',
        Header: <FormattedMessage id={KEYS.REGIONS_CASES}></FormattedMessage>,
      },
      {
        id: 'difference',
        accessor: (r) => r.actual - r.old,
        Header: (
          <FormattedMessage id={KEYS.REGIONS_DAILY_CASES}></FormattedMessage>
        ),
      },
      {
        id: 'percentage',
        accessor: (r) => `+${r.percentage}%`,
        Header: (
          <FormattedMessage
            id={KEYS.REGIONS_PERCENTAGE_CASES}
          ></FormattedMessage>
        ),
      },
    ],
    []
  );

  return (
    <article className="py-4">
      <h1 className="py-2 font-bold text-3xl">
        <FormattedMessage id={KEYS.STATISTICS_BY_REGION}></FormattedMessage>
      </h1>
      <div className="regions">
        <Table data={data} columns={columns}></Table>
      </div>
    </article>
  );
}

export default Regions;

function Table({ columns, data }) {
  const theme = useContext(ThemeContext);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  return (
    <>
      <table {...getTableProps()} className="w-full table-auto">
        <thead className="">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className={`p-1 border cursor-pointer ${theme.regions.header}`}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{ textAlign: 'start' }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="" {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                className={i % 2 ? theme.regions.cell : ''}
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  return (
                    <td className="p-1 border" {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
