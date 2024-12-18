import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const showCellBarsStraight: ControlSetItem = {
  name: 'show_cell_bars_straight',
  config: {
    type: 'CheckboxControl',
    label: t('Гистограммы в ячейках'),
    renderTrigger: true,
    default: true,
    description: t('Отображать гистограммы в колонках таблицы'),
  },
};
