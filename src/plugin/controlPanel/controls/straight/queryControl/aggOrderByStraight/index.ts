import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';

import { isAggMode } from '../../../utils';
import { t } from '@superset-ui/core';

export const aggOrderByStraight: ControlSetItem = {
  name: 'agg_orderby_straight',
  config: {
    ...sharedControls.timeseries_limit_metric,
    label: t('Сортировка'),
    description: t(
      'Эта метрика используется для определения критериев выбора строк (способа сортировки строк), если присутствует ограничение на серию или строку. Если он не определен, он возвращается к первой метрике (где это возможно).',
    ),
    visibility: ({ controls }) => {
      return isAggMode({ controls });
    },
    resetOnHide: false,
  },
};
