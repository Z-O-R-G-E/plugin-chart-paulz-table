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
    } = chartProps;

    const [,, columns] = processColumns(chartProps);

    let baseQuery;

    [baseQuery] = queriesData;

    const data = processDataRecords(baseQuery?.data, columns);

    return {
        data,
        columns,
        height,
        width,
    };
};
