import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t, validateNonEmpty } from '@superset-ui/core';

export const metricsPivot: ControlSetItem = {
  name: 'metrics_pivot',
  config: {
    ...sharedControls.metrics,
    label: t('Меры'),
    validators: [validateNonEmpty],
    rerender: ['conditional_formatting_pivot'],
  },
};
