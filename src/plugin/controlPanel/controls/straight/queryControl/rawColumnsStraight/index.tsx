import React from 'react';

import {
  ColumnOption,
  ControlSetItem,
  sharedControls,
} from '@superset-ui/chart-controls';
import { ensureIsArray, t } from '@superset-ui/core';

import { getQueryMode, isRawMode } from '../../../utils';

export const rawColumnsStraight: ControlSetItem = {
  name: 'raw_columns_straight',
  config: {
    ...sharedControls.groupby,
    label: t('Столбцы'),
    description: t('Столбцы для отображения'),
    multi: true,
    freeForm: true,
    allowAll: true,
    commaChoosesOption: false,
    optionRenderer: column => <ColumnOption showType column={column} />,
    valueRenderer: column => <ColumnOption column={column} />,
    valueKey: 'column_name',
    mapStateToProps: ({ datasource, controls }, controlState) => ({
      options: datasource?.columns || [],
      queryMode: getQueryMode(controls),
      externalValidationErrors:
        isRawMode({ controls }) &&
        ensureIsArray(controlState?.value).length === 0
          ? [t('должно иметь значение')]
          : [],
    }),
    visibility: ({ controls }) => {
      return isRawMode({ controls });
    },
    resetOnHide: false,
  } as typeof sharedControls.groupby,
};
