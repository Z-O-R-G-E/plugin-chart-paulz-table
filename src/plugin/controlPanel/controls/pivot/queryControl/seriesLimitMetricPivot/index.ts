import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const seriesLimitMetricPivot: ControlSetItem = {
  name: 'series_limit_metric_pivot',
  config: {
    ...sharedControls.series_limit_metric,
    label: t('Сортировка'),
    description: t(
      'Метрика, используемая для определения того, как сортируются верхние серии, если присутствует ограничение на серию или ячейку.' +
        ' Если не определено, возвращается к первой метрике (где это возможно).',
    ),
  },
};
