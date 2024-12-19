import {DataColumnMeta} from "../../../../types/StraightTableTypes";

export const getColumnConfigs = (columns: DataColumnMeta[]) => {
  return columns.map((column) => ({
    accessorKey: column.key,
    header: column.label,
  }));
};