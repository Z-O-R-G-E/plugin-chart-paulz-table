import React, {FC, useMemo} from 'react';
import {StraightTableTransformedProps} from "../../../types/StraightTableTypes";
import {flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {getColumnConfigs} from "../utils";

export const StraightTable: FC<Omit<StraightTableTransformedProps, 'width'|'height'>> = ({columns,data}) => {

  const tableColums = useMemo(() => getColumnConfigs(columns), [columns]);

  const table = useReactTable({
    data,
    columns: tableColums,
    getCoreRowModel: getCoreRowModel(),
  })

  return <table>
    <thead>
    {table.getHeaderGroups().map(headerGroup => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                    )}
              </th>
          ))}
        </tr>
    ))}
    </thead>
    <tbody>
    {table.getRowModel().rows.map(row => (
        <tr key={row.id}>
          {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
          ))}
        </tr>
    ))}
    </tbody>
  </table>;
};
