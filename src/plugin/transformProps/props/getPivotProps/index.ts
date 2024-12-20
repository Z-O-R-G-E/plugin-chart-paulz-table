import {
  PivotTableProps,
  PivotTableTransformedProps,
} from '../../../../types/PivotTableTypes';
import {DataRecord} from "@superset-ui/core";

export function getPivotProps(
  chartProps: PivotTableProps,
): PivotTableTransformedProps {
  const {
    height,
    width
  } = chartProps;

  const data: DataRecord[] = [];

  return {data, height, width};
}