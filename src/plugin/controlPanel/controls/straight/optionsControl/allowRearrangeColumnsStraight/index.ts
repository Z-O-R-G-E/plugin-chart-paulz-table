import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const allowRearrangeColumnsStraight: ControlSetItem = {
  name: 'allow_rearrange_columns_straight',
  config: {
    type: 'CheckboxControl',
    label: t('Разрешить перестановку столбцов'),
    renderTrigger: true,
    default: false,
    description: t(
      'Разрешите конечному пользователю перетаскивать заголовки столбцов, чтобы изменить их порядок. Обратите внимание, что их изменения не сохранятся при следующем открытии диаграммы.',
    ),
  },
};
