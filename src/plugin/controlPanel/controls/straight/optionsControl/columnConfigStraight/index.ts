import { ControlSetItem } from '@superset-ui/chart-controls';
import { ChartDataResponseResult, t } from '@superset-ui/core';

export const columnConfigStraight: ControlSetItem = {
  name: 'column_config_straight',
  config: {
    type: 'ColumnConfigControl',
    label: t('Настройка столбцов'),
    description: t('Дальнейшая настройка отображения каждого столбца.'),
    width: 400,
    height: 320,
    renderTrigger: true,
    shouldMapStateToProps() {
      return true;
    },
    mapStateToProps(explore, _, chart) {
      return {
        queryResponse: chart?.queriesResponse?.[0] as
          | ChartDataResponseResult
          | undefined,
      };
    },
  },
};
