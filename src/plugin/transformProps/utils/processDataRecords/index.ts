import memoizeOne from "memoize-one";
import {DataRecord} from "@superset-ui/core";

export const processDataRecords = memoizeOne(function processDataRecords(
    data: DataRecord[] | undefined,
) {
    if (!data?.[0]) {
        return data || [];
    }
    return data;
});