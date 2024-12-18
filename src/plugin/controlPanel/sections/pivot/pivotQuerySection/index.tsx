import { ControlPanelSectionConfig } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import {
  adhocFilters,
  aggregateFunctionPivot,
  colSubtotalsPivot,
  colTotalsPivot,
  combineMetricPivot,
  columnsPivot,
  rowsPivot,
  metricsLayoutPivot,
  metricsPivot,
  orderDescPivot,
  rowLimitPivot,
  rowSubtotalsPivot,
  rowTotalsPivot,
  seriesLimitPivot,
  seriesLimitMetricPivot,
  timeGrainSqlaPivot,
  transposePivot,
} from '../../../controls';
import { isPivotType } from '../../../utils';

const pivotQueryDataSection: ControlPanelSectionConfig = {
  label: t('Запрос'),
  expanded: true,
  visibility: ({ controls }) => isPivotType({ controls }),
  controlSetRows: [
    [columnsPivot],
    [rowsPivot],
    [timeGrainSqlaPivot, 'temporal_columns_lookup'],
    [metricsPivot],
    [metricsLayoutPivot],
    [adhocFilters],
    [seriesLimitPivot],
    [rowLimitPivot],
    [seriesLimitMetricPivot],
    [orderDescPivot],
  ],
};

const pivotQueryOptionsSection: ControlPanelSectionConfig = {
  label: t('Опции'),
  expanded: true,
  visibility: ({ controls }) => isPivotType({ controls }),
  tabOverride: 'data',
  controlSetRows: [
    [aggregateFunctionPivot],
    [rowTotalsPivot],
    [rowSubtotalsPivot],
    [colTotalsPivot],
    [colSubtotalsPivot],
    [transposePivot],
    [combineMetricPivot],
  ],
};

export const pivotQuerySection: ControlPanelSectionConfig[] = [
  pivotQueryDataSection,
  pivotQueryOptionsSection,
];
