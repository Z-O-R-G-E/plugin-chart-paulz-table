import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import {
  ensureIsArray,
  isAdhocColumn,
  isPhysicalColumn,
  t,
} from '@superset-ui/core';

export const timeGrainSqlaPivot: ControlSetItem = {
  name: 'time_grain_sqla_pivot',
  config: {
    ...sharedControls.time_grain_sqla,
    label: t('Единица времени'),
    visibility: ({ controls }) => {
      const dttmLookup = Object.fromEntries(
        ensureIsArray(controls?.columns_pivot?.options).map(option => [
          option.column_name,
          option.is_dttm,
        ]),
      );

      return [
        ...ensureIsArray(controls?.columns_pivot.value),
        ...ensureIsArray(controls?.rows_pivot.value),
      ]
        .map(selection => {
          if (isAdhocColumn(selection)) {
            return true;
          }
          if (isPhysicalColumn(selection)) {
            return !!dttmLookup[selection];
          }
          return false;
        })
        .some(Boolean);
    },
  },
};
