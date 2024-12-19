import {
    ChartDataResponseResult,
    ChartProps, Currency,
    CurrencyFormatter,
    DataRecord, DataRecordFilters,
    DataRecordValue,
    GenericDataType,
    NumberFormatter,
    QueryFormData,
    QueryFormMetric,
    TimeFormatter,
} from '@superset-ui/core';
import { QueryMode } from '../../consts';

/*--------------------General--------------------*/
export type StraightTableOptionsProps = {};

export type StraightTableFormData = QueryFormData &
  StraightTableOptionsProps & {
    query_mode_straight?: QueryMode;
    raw_columns_straight?: QueryFormMetric[] | null;
  };

export interface StraightTableTransformedProps<D extends DataRecord = DataRecord> {
    height: number;
    width: number;
    data: D[];
    columns: DataColumnMeta[];
    rowCount?: number;
    filters?: DataRecordFilters;
}

export interface StraightTableStylesProps {}

export type StraightTableProps = ChartProps & {
    rawFormData: StraightTableFormData;
    queriesData: ChartDataResponseResult[];
};
/*--------------------General--------------------*/

/*--------------------DataColumnMeta--------------------*/
export type CustomFormatter = (value: DataRecordValue) => string;

export type TableColumnConfig = {
    d3NumberFormat?: string;
    d3SmallNumberFormat?: string;
    d3TimeFormat?: string;
    columnWidth?: number;
    horizontalAlign?: 'left' | 'right' | 'center';
    showCellBars?: boolean;
    alignPositiveNegative?: boolean;
    colorPositiveNegative?: boolean;
    truncateLongCells?: boolean;
    currencyFormat?: Currency;
};

export interface DataColumnMeta {
    // `key` is what is called `label` in the input props
    key: string;
    // `label` is verbose column name used for rendering
    label: string;
    dataType: GenericDataType;
    formatter?:
        | TimeFormatter
        | NumberFormatter
        | CustomFormatter
        | CurrencyFormatter;
    isMetric?: boolean;
    isPercentMetric?: boolean;
    isNumeric?: boolean;
    config?: TableColumnConfig;
}
/*--------------------DataColumnMeta--------------------*/