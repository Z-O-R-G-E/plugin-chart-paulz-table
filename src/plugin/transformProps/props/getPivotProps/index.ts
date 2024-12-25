import {
  PivotTableProps,
  PivotTableTransformedProps,
} from '../../../../types/PivotTableTypes';
import {DataRecord} from "@superset-ui/core";
import {DataColumnMeta} from "../../../../types/StraightTableTypes";

export function getPivotProps(
  chartProps: PivotTableProps,
): PivotTableTransformedProps {
  const {
    height,
    width
  } = chartProps;

  const data: DataRecord[] = [];
  const columns: DataColumnMeta[] = [];

  return {data, columns, height, width};
}