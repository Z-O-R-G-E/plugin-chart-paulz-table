import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const includeSearchStraight: ControlSetItem = {
  name: 'include_search_straight',
  config: {
    type: 'CheckboxControl',
    label: t('Строка поиска'),
    renderTrigger: true,
    default: false,
    description: t('Включить ли окно поиска на стороне клиента'),
  },
};
