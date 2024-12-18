import {
  ChartDataResponseResult,
  ChartProps,
  DataRecordValue,
  QueryFormData,
  QueryFormMetric,
} from '@superset-ui/core';
import { QueryMode } from '../../consts';

export type CustomFormatter = (value: DataRecordValue) => string;

export type TableColumnConfig = {};

export interface DataColumnMeta {
}

export interface StraightTableData {
}

/*-----------------------------------------*/

export type StraightTableOptionsProps = {};

export type StraightTableFormData = QueryFormData &
  StraightTableOptionsProps & {
    query_mode_straight?: QueryMode;
    raw_columns_straight?: QueryFormMetric[] | null;
  };

export interface StraightTableStylesProps {}

export interface StraightTableTransformedProps {}

export type StraightTableProps = ChartProps & {
  rawFormData?: StraightTableFormData;
  queriesData?: ChartDataResponseResult[];
};
