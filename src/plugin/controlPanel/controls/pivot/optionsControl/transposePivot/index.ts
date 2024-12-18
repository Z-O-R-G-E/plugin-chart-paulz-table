import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const transposePivot: ControlSetItem = {
  name: 'transpose_pivot',
  config: {
    type: 'CheckboxControl',
    label: t('Транспонировать таблицу'),
    default: false,
    description: t('Поменять местами строки и столбцы'),
    renderTrigger: true,
  },
};
