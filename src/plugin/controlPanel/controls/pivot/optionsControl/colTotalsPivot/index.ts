import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const colTotalsPivot: ControlSetItem = {
  name: 'col_totals_pivot',
  config: {
    type: 'CheckboxControl',
    label: t('Показать общий итог по столбцам'),
    default: false,
    renderTrigger: true,
    description: t('Отображать общий итог по столбцам'),
  },
};
