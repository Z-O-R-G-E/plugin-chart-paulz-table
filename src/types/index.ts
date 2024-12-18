import {QueryFormData} from '@superset-ui/core';

import {
  StraightTableFormData,
  StraightTableProps,
  StraightTableStylesProps,
} from './StraightTableTypes';
import {
  PivotTableFormData,
  PivotTableProps,
  PivotTableStylesProps,
} from './PivotTableTypes';
import { TableType } from '../consts';

export type PaulzTableFormData = QueryFormData &
  PivotTableFormData &
  StraightTableFormData & {
    table_type?: TableType;
  };

export type PaulzTableStylesProps = PivotTableStylesProps &
  StraightTableStylesProps & {
    height: number;
    width: number;
  };

export type PaulzTableProps = PivotTableProps & StraightTableProps & PaulzTableStylesProps;
