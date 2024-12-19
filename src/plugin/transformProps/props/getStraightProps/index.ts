import {
    StraightTableProps, StraightTableTransformedProps,
} from '../../../../types/StraightTableTypes';
import {processDataRecords} from "../../utils";
import {processColumns} from "../../utils/processColumns";

export const getStraightProps = (
  chartProps: StraightTableProps,
): StraightTableTransformedProps => {
    const {
        height,
        width,
        queriesData = [],
        filterState,
    } = chartProps;

    const [,, columns] = processColumns(chartProps);

    let baseQuery;
    let rowCount;

    [baseQuery] = queriesData;
    rowCount = baseQuery?.rowcount ?? 0;

    const data = processDataRecords(baseQuery?.data, columns);

    return {
        data,
        columns,
        height,
        width,
        rowCount,
        filters: filterState.filters
    };
};
