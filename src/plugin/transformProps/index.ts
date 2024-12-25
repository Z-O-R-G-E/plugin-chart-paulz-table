import { TableType } from '../../consts';
import {PaulzTableFormData, PaulzTableProps, PaulzTableTransformedProps} from '../../types';
import { getTableType } from '../../utils';
import { getPivotProps, getStraightProps } from './props';

const transformProps = (chartProps: PaulzTableProps): PaulzTableTransformedProps => {
  const { formData } = chartProps;

  const tableType = getTableType(formData as PaulzTableFormData);
  const isStraightTable = tableType === TableType.STRAIGHT;

  let transformedProps = { isStraightTable };

  if (isStraightTable) {
    transformedProps = { ...transformedProps, ...getStraightProps(chartProps) };
  }else{
    transformedProps = { ...transformedProps, ...getPivotProps(chartProps) };
  }

  return transformedProps;
};

export default transformProps;
