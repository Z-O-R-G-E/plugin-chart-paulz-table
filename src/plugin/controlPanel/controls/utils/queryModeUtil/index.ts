import {
  ControlPanelsContainerProps,
  ControlStateMapping,
} from '@superset-ui/chart-controls';
import { QueryFormColumn, ensureIsArray, t } from '@superset-ui/core';
import { QueryMode } from '../../../../../consts';

export function getQueryMode(controls: ControlStateMapping): QueryMode {
  const mode = controls?.query_mode_straight?.value;
  if (mode === QueryMode.AGGREGATE || mode === QueryMode.RAW) {
    return mode as QueryMode;
  }
  const rawColumns = controls?.raw_columns_straight?.value as
    | QueryFormColumn[]
    | undefined;
  const hasRawColumns = rawColumns && rawColumns.length > 0;
  return hasRawColumns ? QueryMode.RAW : QueryMode.AGGREGATE;
}

export function isQueryMode(mode: QueryMode) {
  return ({ controls }: Pick<ControlPanelsContainerProps, 'controls'>) =>
    getQueryMode(controls) === mode;
}

export const validateAggControlValues = (
  controls: ControlStateMapping,
  values: any[],
) => {
  const areControlsEmpty = values.every(val => ensureIsArray(val).length === 0);
  return areControlsEmpty && isAggMode({ controls })
    ? [t('Группировка, Метрики или Процентные метрики должны иметь значение.')]
    : [];
};

export const isAggMode = isQueryMode(QueryMode.AGGREGATE);
export const isRawMode = isQueryMode(QueryMode.RAW);
