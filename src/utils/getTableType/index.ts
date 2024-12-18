import { TableType } from '../../consts';
import { PaulzTableFormData } from '../../types';

export function getTableType(formData: PaulzTableFormData): TableType {
  const { table_type: type } = formData;
  if (type === TableType.PIVOT || type === TableType.STRAIGHT) {
    return type;
  }

  return TableType.STRAIGHT;
}
