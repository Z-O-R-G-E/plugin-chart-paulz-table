import {
  ControlPanelState,
  ControlSetItem,
  ControlState,
  sharedControls,
} from '@superset-ui/chart-controls';
import { isAggMode, validateAggControlValues } from '../../../utils';
import { t } from '@superset-ui/core';

export const aggColumnsStraight: ControlSetItem = {
  name: 'agg_columns_straight',
  config: {
    ...sharedControls.groupby,
    label: t('Измерения'),
    description: t(
      'Измерения содержат качественные значения, такие как имена, даты или географические данные. Используйте измерения, чтобы классифицировать, сегментировать и раскрывать детали ваших данных. Размеры влияют на уровень детализации вида.',
    ),
    visibility: ({ controls }) => {
      return isAggMode({ controls });
    },
    resetOnHide: false,
    mapStateToProps: (state: ControlPanelState, controlState: ControlState) => {
      const { controls } = state;
      const originalMapStateToProps = sharedControls?.groupby?.mapStateToProps;
      const newState = originalMapStateToProps?.(state, controlState) ?? {};
      newState.externalValidationErrors = validateAggControlValues(controls, [
        controls.metrics_straight?.value,
        controls.percent_metrics_straight?.value,
        controlState.value,
      ]);

      return newState;
    },
    rerender: ['metrics_straight', 'percent_metrics_straight'],
  },
};
