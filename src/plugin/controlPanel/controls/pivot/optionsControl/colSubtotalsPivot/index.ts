import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const colSubtotalsPivot: ControlSetItem = {
  name: 'col_subtotals_pivot',
  config: {
    type: 'CheckboxControl',
    label: t('Показать промежуточный итог по столбцам'),
    default: false,
    renderTrigger: true,
    description: t('Отображать промежуточный итог по столбцам'),
  },
};
