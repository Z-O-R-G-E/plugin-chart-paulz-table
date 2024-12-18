import {
  BuildQuery,
  buildQueryContext, QueryFormColumn,
} from '@superset-ui/core';
import { PaulzTableFormData } from '../../../../types';

import { StraightTableFormData } from '../../../../types/StraightTableTypes';
import { QueryMode } from '../../../../consts';

export const getQueryMode = (formData: StraightTableFormData) => {
  const { query_mode_straight: mode } = formData;
  if (mode === QueryMode.AGGREGATE || mode === QueryMode.RAW) {
    return mode;
  }
  const rawColumns = formData?.raw_columns_straight;
  const hasRawColumns = rawColumns && rawColumns.length > 0;
  return hasRawColumns ? QueryMode.RAW : QueryMode.AGGREGATE;
};

export const getStraightBuildQueryContext: BuildQuery<PaulzTableFormData> = (
  formData: PaulzTableFormData,
  options,
) => {
  const queryMode = getQueryMode(formData);

  let formDataCopy = formData;

  if (queryMode === QueryMode.RAW) {
    formDataCopy = {
      ...formData,
      includeTime: false,
    };
  }

  return buildQueryContext(formDataCopy, baseQueryObject => {
    let { metrics, orderby = [], columns = [] } = baseQueryObject;

    let queryObject = {
      ...baseQueryObject,
      columns,
      orderby,
      metrics,
    };

    const rawCols = formData.raw_columns_straight as QueryFormColumn[];
    if (rawCols && queryObject.columns) {
      queryObject.columns = [
        ...new Set([...queryObject.columns, ...rawCols]),
      ];
    }

    return [queryObject];
  });
};
