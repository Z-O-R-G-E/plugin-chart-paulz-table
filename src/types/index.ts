import {
    StraightTableFormData,
    StraightTableProps,
    StraightTableTransformedProps,
} from './StraightTableTypes';
import {
    PivotTableFormData,
    PivotTableProps,
    PivotTableTransformedProps,
} from './PivotTableTypes';
import { TableType } from '../consts';
import {DataRecord} from "@superset-ui/core";

export type PaulzTableFormData = PivotTableFormData & StraightTableFormData & {
    table_type?: TableType;
};

export type PaulzTableTransformedProps<D extends DataRecord = DataRecord> = Partial<StraightTableTransformedProps<D>> & Partial<PivotTableTransformedProps<D>> & {
    isStraightTable: boolean;
};

export type PaulzTableProps = PivotTableProps & StraightTableProps;
