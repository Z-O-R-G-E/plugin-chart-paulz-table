import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isRawMode } from '../../../utils';

export const orderDesc: ControlSetItem = {
  name: 'order_desc',
  config: {
    type: 'CheckboxControl',
    label: t('Сортировать по убыванию'),
    default: true,
    description: t('Сортировать по убыванию или по возрастанию'),
    visibility: ({ controls }) => {
      return !isRawMode({ controls });
    },
    resetOnHide: false,
  },
};
