import { PaulzTableFormData } from '../../types';
import {
  getPivotBuildQueryContext,
  getStraightBuildQueryContext,
} from './buildQueryContext';
import {BuildQuery, QueryContext} from '@superset-ui/core';
import { getTableType } from '../../utils';
import { TableType } from '../../consts';

const buildQuery: BuildQuery = (formData: PaulzTableFormData, options) => {
  const tableType = getTableType(formData);

  if (tableType === TableType.STRAIGHT) {
    return getStraightBuildQueryContext(formData, options);
  }
  if (tableType === TableType.PIVOT) {
    return getPivotBuildQueryContext(formData, options);
  }
  return {} as QueryContext;
};

export default buildQuery;
