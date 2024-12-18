import {
  ControlPanelsContainerProps,
  ControlStateMapping,
} from '@superset-ui/chart-controls';
import { TableType } from '../../../../consts';

export function getTableType(controls: ControlStateMapping): TableType {
  const type = controls?.table_type?.value;
  if (type === TableType.STRAIGHT || type === TableType.PIVOT) {
    return type as TableType;
  }

  return TableType.STRAIGHT;
}

export function isTableType(type: TableType) {
  return ({ controls }: Pick<ControlPanelsContainerProps, 'controls'>) =>
    getTableType(controls) === type;
}

export const isStraightType = isTableType(TableType.STRAIGHT);
export const isPivotType = isTableType(TableType.PIVOT);
