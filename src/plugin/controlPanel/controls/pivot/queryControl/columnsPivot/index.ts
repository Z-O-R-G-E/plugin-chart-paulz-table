import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const columnsPivot: ControlSetItem = {
  name: 'columns_pivot',
  config: {
    ...sharedControls.groupby,
    label: t('Столбцы'),
    description: t('Столбцы для группировки по столбцам'),
  },
};
