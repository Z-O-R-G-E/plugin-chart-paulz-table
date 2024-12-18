import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const colSubtotalPositionPivot: ControlSetItem = {
  name: 'col_subtotal_position_pivot',
  config: {
    type: 'SelectControl',
    label: t('Расположение столбцов подытогов'),
    default: false,
    choices: [
      [true, t('Слева')],
      [false, t('Справа')],
    ],
    renderTrigger: true,
    description: t('Расположение промежуточного итога на уровне столбца'),
  },
};
