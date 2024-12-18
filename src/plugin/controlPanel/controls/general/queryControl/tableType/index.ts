import { ControlConfig, ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { getTableType } from '../../../../utils';
import { TableType } from '../../../../../../consts';
import { TableTypeLabel } from '../../../../consts';

export const tableType: ControlSetItem = {
  name: 'table_type',
  config: {
    type: 'RadioButtonControl',
    label: t('Тип таблицы'),
    default: null,
    options: [
      [TableType.STRAIGHT, TableTypeLabel[TableType.STRAIGHT]],
      [TableType.PIVOT, TableTypeLabel[TableType.PIVOT]],
    ],
    mapStateToProps: ({ controls }) => ({ value: getTableType(controls) }),
  } as ControlConfig<'RadioButtonControl'>,
};
