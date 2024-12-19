import memoizeOne from "memoize-one";
import {DataRecord, GenericDataType, TimeFormatter} from "@superset-ui/core";
import {DataColumnMeta} from "../../../../types/StraightTableTypes";
import DateWithFormatter from "../../../../utils/DateWithFormatter";

export const processDataRecords = memoizeOne(function processDataRecords(
    data: DataRecord[] | undefined,
    columns: DataColumnMeta[],
) {
    if (!data?.[0]) {
        return data || [];
    }
    const timeColumns = columns.filter(
        column => column.dataType === GenericDataType.Temporal,
    );

    if (timeColumns.length > 0) {
        return data.map(x => {
            const datum = { ...x };
            timeColumns.forEach(({ key, formatter }) => {
                // Convert datetime with a custom date class so we can use `String(...)`
                // formatted value for global search, and `date.getTime()` for sorting.
                datum[key] = new DateWithFormatter(x[key], {
                    formatter: formatter as TimeFormatter,
                });
            });
            return datum;
        });
    }
    return data;
});