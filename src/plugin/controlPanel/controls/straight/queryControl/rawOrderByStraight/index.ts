import { ControlSetItem, Dataset } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

import { isRawMode } from '../../../utils';

export const rawOrderByStraight: ControlSetItem = {
  name: 'raw_orderby_straight',
  config: {
    type: 'SelectControl',
    label: t('Сортировка'),
    description: t('Упорядочить результаты по выбранным столбцам'),
    multi: true,
    default: [],
    mapStateToProps: ({ datasource }) => ({
      choices: datasource?.hasOwnProperty('order_by_choices')
        ? (datasource as Dataset)?.order_by_choices
        : datasource?.columns || [],
    }),
    visibility: ({ controls }) => {
      return isRawMode({ controls });
    },
    resetOnHide: false,
  },
};
