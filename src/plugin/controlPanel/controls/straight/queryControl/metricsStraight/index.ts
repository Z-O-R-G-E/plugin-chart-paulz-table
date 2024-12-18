import {
  ColumnMeta,
  ControlPanelState,
  ControlSetItem,
  ControlState,
  Dataset,
  defineSavedMetrics,
  sharedControls,
} from '@superset-ui/chart-controls';

import { isAggMode, validateAggControlValues } from '../../../utils';
import { t } from '@superset-ui/core';

export const metricsStraight: ControlSetItem = {
  name: 'metrics_straight',
  config: {
    ...sharedControls.metrics,
    label: t('Меры'),
    description: t(
      'Выберите один или несколько показателей для отображения. Вы можете использовать функцию агрегирования для столбца или написать собственный SQL для создания метрики.',
    ),
    validators: [],
    visibility: ({ controls }) => {
      return isAggMode({ controls });
    },
    resetOnHide: false,
    mapStateToProps: (
      { controls, datasource, form_data }: ControlPanelState,
      controlState: ControlState,
    ) => ({
      columns: datasource?.columns[0]?.hasOwnProperty('filterable')
        ? (datasource as Dataset)?.columns?.filter(
            (c: ColumnMeta) => c.filterable,
          )
        : datasource?.columns,
      savedMetrics: defineSavedMetrics(datasource),
      selectedMetrics:
        form_data.metrics || (form_data.metric ? [form_data.metric] : []),
      datasource,
      externalValidationErrors: validateAggControlValues(controls, [
        controls.agg_columns_straight?.value,
        controls.percent_metrics_straight?.value,
        controlState.value,
      ]),
    }),
    rerender: ['agg_columns_straight', 'percent_metrics_straight'],
  },
};
