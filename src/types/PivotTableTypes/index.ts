import {
  ChartDataResponseResult,
  ChartProps,
  DataRecord,
  QueryFormData,
} from '@superset-ui/core';
import {DataColumnMeta} from "../StraightTableTypes";

/*-----------------------------------------*/

export type PivotTableOptionsProps = {};

export type PivotTableFormData = QueryFormData &
    PivotTableOptionsProps & {
};

export interface PivotTableTransformedProps<D extends DataRecord = DataRecord> {
  height: number;
  width: number;
  data: D[];
  columns: DataColumnMeta[];
}

export interface PivotTableStylesProps {}

export type PivotTableProps = ChartProps & {
  rawFormData: PivotTableFormData;
  queriesData: ChartDataResponseResult[];
};
