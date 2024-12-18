import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { QueryModeLabel } from '../../../../consts';
import { getQueryMode } from '../../../utils';
import { QueryMode } from '../../../../../../consts';

export const queryModeStraight: ControlSetItem = {
  name: 'query_mode_straight',
  config: {
    type: 'RadioButtonControl',
    label: t('Режим запроса'),
    default: null,
    options: [
      [QueryMode.AGGREGATE, QueryModeLabel[QueryMode.AGGREGATE]],
      [QueryMode.RAW, QueryModeLabel[QueryMode.RAW]],
    ],
    mapStateToProps: ({ controls }) => ({ value: getQueryMode(controls) }),
    rerender: [
      'raw_columns_straight',
    ],
  },
};
