import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const colorPnStraight: ControlSetItem = {
  name: 'color_pn_straight',
  config: {
    type: 'CheckboxControl',
    label: t('Раскрасить +/-'),
    renderTrigger: true,
    default: true,
    description: t(
      'Раскрашивать числовые значения в зависимости от того, являются ли они положительными или отрицательными',
    ),
  },
};
