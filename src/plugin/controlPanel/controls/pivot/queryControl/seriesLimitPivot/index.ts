import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const seriesLimitPivot: ControlSetItem = {
  name: 'series_limit_pivot',
  config: {
    ...sharedControls.series_limit,
    label: t('Лимит кол-ва категорий'),
    description: t(
      'Ограничивает количество отображаемых категорий. Эта опция полезна для столбцов с большим количеством уникальных значений, т.к. уменьшает сложность и стоимость запроса.',
    ),
  },
};
