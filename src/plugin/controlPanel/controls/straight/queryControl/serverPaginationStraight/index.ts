import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const serverPaginationStraight: ControlSetItem = {
  name: 'server_pagination_straight',
  config: {
    type: 'CheckboxControl',
    label: t('Серверная пагинация'),
    description: t(
      'Включить разбивку результатов на стороне сервера (экспериментальная функция)',
    ),
    default: false,
  },
};
