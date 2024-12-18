import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

import { isAggMode } from '../../../utils';

export const showTotalsStraight: ControlSetItem = {
  name: 'show_totals_straight',
  config: {
    type: 'CheckboxControl',
    label: t('Показать общий итог'),
    default: false,
    description: t(
      'Показать общие совокупности выбранных показателей. Обратите внимание, что ограничение на количество строк не применяется к результату.',
    ),
    visibility: ({ controls }) => {
      return isAggMode({ controls });
    },
    resetOnHide: false,
  },
};
