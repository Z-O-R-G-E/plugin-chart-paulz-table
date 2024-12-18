import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const rowSubtotalPositionPivot: ControlSetItem = {
  name: 'row_subtotal_position_pivot',
  config: {
    type: 'SelectControl',
    label: t('Расположение строк подытогов'),
    default: false,
    choices: [
      [true, t('Сверху')],
      [false, t('Снизу')],
    ],
    renderTrigger: true,
    description: t('Расположение промежуточного итога на уровне строки'),
  },
};
