import {
    ChartDataResponseResult, ChartProps, DataRecord,
    QueryFormData,
    QueryFormMetric,
} from '@superset-ui/core';
import { QueryMode } from '../../consts';

/*-----------------------------------------*/

export type StraightTableOptionsProps = {};

export type StraightTableFormData = QueryFormData &
  StraightTableOptionsProps & {
    query_mode_straight?: QueryMode;
    raw_columns_straight?: QueryFormMetric[] | null;
  };

export interface StraightTableTransformedProps<D extends DataRecord = DataRecord> {
    data: D[];
    height: number;
    width: number;
}

export interface StraightTableStylesProps {}

export type StraightTableProps = ChartProps & {
    rawFormData: StraightTableFormData;
    queriesData: ChartDataResponseResult[];
};