import {
    StraightTableProps, StraightTableTransformedProps,
} from '../../../../types/StraightTableTypes';
import {processDataRecords} from "../../utils";

export const getStraightProps = (
  chartProps: StraightTableProps,
): StraightTableTransformedProps => {
    const {
        height,
        width,
        queriesData = [],
    } = chartProps;

    let baseQuery;
    [baseQuery] = queriesData;

    const data = processDataRecords(baseQuery?.data);

    return {data, height, width};
};
