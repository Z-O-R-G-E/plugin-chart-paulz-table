import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { MetricsLayoutEnum } from '../../../../../../consts';

export const metricsLayoutPivot: ControlSetItem = {
  name: 'metrics_layout_pivot',
  config: {
    type: 'RadioButtonControl',
    renderTrigger: true,
    label: t('Применить меры к'),
    default: MetricsLayoutEnum.COLUMNS,
    options: [
      [MetricsLayoutEnum.COLUMNS, t('Столбцы')],
      [MetricsLayoutEnum.ROWS, t('Строки')],
    ],
    description: t(
      'Используйте метрики в качестве группы верхнего уровня для столбцов или строк.',
    ),
  },
};
