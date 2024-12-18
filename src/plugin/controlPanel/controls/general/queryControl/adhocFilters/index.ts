import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const adhocFilters: ControlSetItem = {
  name: 'adhoc_filters',
  config: {
    ...sharedControls.adhoc_filters,
    label: t('Фильтры'),
  },
};
