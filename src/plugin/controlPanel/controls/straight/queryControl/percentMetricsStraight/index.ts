import {
  ControlSetItem,
  defineSavedMetrics,
  sharedControls,
} from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

import {
  getQueryMode,
  isAggMode,
  validateAggControlValues,
} from '../../../utils';

export const percentMetricsStraight: ControlSetItem = {
  name: 'percent_metrics_straight',
  config: {
    ...sharedControls.metrics,
    label: t('Процентные меры'),
    description: t(
      'Метрики, для которых должен отображаться процент от общего числа. Рассчитывается только на основе данных, находящихся в пределах строки.',
    ),
    visibility: ({ controls }) => {
      return isAggMode({ controls });
    },
    resetOnHide: false,
    mapStateToProps: ({ datasource, controls }, controlState) => {
      return {
        columns: datasource?.columns || [],
        savedMetrics: defineSavedMetrics(datasource),
        datasource,
        datasourceType: datasource?.type,
        queryMode: getQueryMode(controls),
        externalValidationErrors: validateAggControlValues(controls, [
          controls.agg_columns_straight?.value,
          controls.metrics_straight?.value,
          controlState?.value,
        ]),
      };
    },
    rerender: ['agg_columns_straight', 'metrics_straight'],
    default: [],
    validators: [],
  } as typeof sharedControls.metrics,
};
