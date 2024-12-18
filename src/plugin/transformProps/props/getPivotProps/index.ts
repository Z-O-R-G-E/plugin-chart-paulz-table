import {
  PivotTableProps,
  PivotTableTransformedProps,
} from '../../../../types/PivotTableTypes';
import {processDataRecords} from "../../utils";

export function getPivotProps(
  chartProps: PivotTableProps,
): PivotTableTransformedProps {
  const {
    height,
    width,
    queriesData = [],
  } = chartProps;

  let baseQuery;
  [baseQuery] = queriesData;

  const data = processDataRecords(baseQuery?.data);

  return {data, height, width};
}