import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const orderDescPivot: ControlSetItem = {
  name: 'order_desc_pivot',
  config: {
    type: 'CheckboxControl',
    label: t('Сортировать по убыванию'),
    default: true,
    description: t('Сортировать по убыванию или по возрастанию'),
  },
};
