import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const rowsPivot: ControlSetItem = {
  name: 'rows_pivot',
  config: {
    ...sharedControls.groupby,
    label: t('Строки'),
    description: t('Столбцы для группировки по строкам'),
  },
};
