import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const currencyFormatPivot: ControlSetItem = {
  name: 'currency_format_pivot',
  config: {
    ...sharedControls.currency_format,
    label: t('Формат валюты'),
  },
};
