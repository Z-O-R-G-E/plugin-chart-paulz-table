import memoizeOne from "memoize-one";
import {PaulzTableProps} from "../../../../types";
import {
    CurrencyFormatter,
    extractTimegrain,
    GenericDataType,
    getMetricLabel, getNumberFormatter,
    getTimeFormatter,
    getTimeFormatterForGranularity
} from "@superset-ui/core";
import {DataColumnMeta} from "../../../../types/StraightTableTypes";
import smartDateFormatter from "../smartDateFormatter";
import {isNumeric} from "../isNumeric";
import isEqualColumns from "../../../../utils/isEqualColumns";
import {DATABASE_DATETIME, PERCENT_3_POINT} from "../../consts";

export const processColumns = memoizeOne(function processColumns(
    props: PaulzTableProps,
) {
    const {
        datasource: { columnFormats, currencyFormats, verboseMap },
        rawFormData: {
            table_timestamp_format: tableTimestampFormat,
            metrics: metrics_,
            percent_metrics: percentMetrics_,
            column_config: columnConfig = {},
        },
        queriesData,
    } = props;
    const granularity = extractTimegrain(props.rawFormData);
    const { data: records, colnames, coltypes } = queriesData[0] || {};
    // convert `metrics` and `percentMetrics` to the key names in `data.records`
    const metrics = (metrics_ ?? []).map(getMetricLabel);
    const rawPercentMetrics = (percentMetrics_ ?? []).map(getMetricLabel);
    // column names for percent metrics always starts with a '%' sign.
    const percentMetrics = rawPercentMetrics.map((x: string) => `%${x}`);
    const metricsSet = new Set(metrics);
    const percentMetricsSet = new Set(percentMetrics);
    const rawPercentMetricsSet = new Set(rawPercentMetrics);

    const columns: DataColumnMeta[] = (colnames || [])
        .filter(
            key =>
                // if a metric was only added to percent_metrics, they should not show up in the table.
                !(rawPercentMetricsSet.has(key) && !metricsSet.has(key)),
        )
        .map((key: string, i) => {
            const dataType = coltypes[i];
            const config = columnConfig[key] || {};
            // for the purpose of presentation, only numeric values are treated as metrics
            // because users can also add things like `MAX(str_col)` as a metric.
            const isMetric = metricsSet.has(key) && isNumeric(key, records);
            const isPercentMetric = percentMetricsSet.has(key);
            const label =
                isPercentMetric && verboseMap?.hasOwnProperty(key.replace('%', ''))
                    ? `%${verboseMap[key.replace('%', '')]}`
                    : verboseMap?.[key] || key;
            const isTime = dataType === GenericDataType.Temporal;
            const isNumber = dataType === GenericDataType.Numeric;
            const savedFormat = columnFormats?.[key];
            const savedCurrency = currencyFormats?.[key];
            const numberFormat = config.d3NumberFormat || savedFormat;
            const currency = config.currencyFormat?.symbol
                ? config.currencyFormat
                : savedCurrency;

            let formatter;

            if (isTime || config.d3TimeFormat) {
                // string types may also apply d3-time format
                // pick adhoc format first, fallback to column level formats defined in
                // datasource
                const customFormat = config.d3TimeFormat || savedFormat;
                const timeFormat = customFormat || tableTimestampFormat;
                // When format is "Adaptive Formatting" (smart_date)
                if (timeFormat === smartDateFormatter.id) {
                    if (granularity) {
                        // time column use formats based on granularity
                        formatter = getTimeFormatterForGranularity(granularity);
                    } else if (customFormat) {
                        // other columns respect the column-specific format
                        formatter = getTimeFormatter(customFormat);
                    } else if (isNumeric(key, records)) {
                        // if column is numeric values, it is considered a timestamp64
                        formatter = getTimeFormatter(DATABASE_DATETIME);
                    } else {
                        // if no column-specific format, print cell as is
                        formatter = String;
                    }
                } else if (timeFormat) {
                    formatter = getTimeFormatter(timeFormat);
                }
            } else if (isPercentMetric) {
                // percent metrics have a default format
                formatter = getNumberFormatter(numberFormat || PERCENT_3_POINT);
            } else if (isMetric || (isNumber && (numberFormat || currency))) {
                formatter = currency
                    ? new CurrencyFormatter({
                        d3Format: numberFormat,
                        currency,
                    })
                    : getNumberFormatter(numberFormat);
            }
            return {
                key,
                label,
                dataType,
                isNumeric: dataType === GenericDataType.Numeric,
                isMetric,
                isPercentMetric,
                formatter,
                config,
            };
        });
    return [metrics, percentMetrics, columns] as [
        typeof metrics,
        typeof percentMetrics,
        typeof columns,
    ];
}, isEqualColumns);