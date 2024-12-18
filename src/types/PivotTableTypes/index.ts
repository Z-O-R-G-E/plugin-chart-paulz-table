import {
  ChartDataResponseResult,
  ChartProps,
  DataRecord,
  QueryFormData,
} from '@superset-ui/core';

/*-----------------------------------------*/

export type PivotTableOptionsProps = {};

export type PivotTableFormData = QueryFormData &
    PivotTableOptionsProps & {
};

export interface PivotTableTransformedProps<D extends DataRecord = DataRecord> {
  data: D[];
  height: number;
  width: number;
}

export interface PivotTableStylesProps {}

export type PivotTableProps = ChartProps & {
  rawFormData: PivotTableFormData;
  queriesData: ChartDataResponseResult[];
};
