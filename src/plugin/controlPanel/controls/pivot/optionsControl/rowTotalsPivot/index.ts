import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const rowTotalsPivot: ControlSetItem = {
  name: 'row_totals_pivot',
  config: {
    type: 'CheckboxControl',
    label: t('Показать общий итог по строкам'),
    default: false,
    renderTrigger: true,
    description: t('Отображать общий итог по строке'),
  },
};
