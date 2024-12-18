import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const rowLimitPivot: ControlSetItem = {
  name: 'row_limit_pivot',
  config: {
    ...sharedControls.row_limit,
    label: t('Лимит ячеек'),
    description: t('Ограничивает количество извлекаемых ячеек.'),
  },
};
