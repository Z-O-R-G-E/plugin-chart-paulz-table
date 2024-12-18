import {
  ChartProps,
  DataRecord,
  DataRecordValue,
  NumberFormatter,
  QueryFormData,
  TimeFormatter,
} from '@superset-ui/core';

export type DateFormatter =
  | TimeFormatter
  | NumberFormatter
  | ((value: DataRecordValue) => string);

export type FilterType = Record<string, DataRecordValue>;
export type SelectedFiltersType = Record<string, DataRecordValue[]>;

export interface PivotTableData {
  records: DataRecord[];
  columns: string[];
}

/*-----------------------------------------*/

export type PivotTableOptionsProps = {};

export type PivotTableFormData = QueryFormData & PivotTableOptionsProps & {};

export interface PivotTableStylesProps {}

export interface PivotTableTransformedProps {}

export type PivotTableProps = ChartProps;
