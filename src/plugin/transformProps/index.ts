import { TableType } from '../../consts';
import {PaulzTableFormData, PaulzTableProps, PaulzTableTransformedProps} from '../../types';
import { getTableType } from '../../utils';
import { getPivotProps, getStraightProps } from './props';

const transformProps = (chartProps: PaulzTableProps): PaulzTableTransformedProps => {
  const { formData, width, height } = chartProps;

  const tableType = getTableType(formData as PaulzTableFormData);

  let transformedProps = { width, height };

  if (tableType === TableType.STRAIGHT) {
    transformedProps = { ...transformedProps, ...getStraightProps(chartProps) };
  }
  if (tableType === TableType.PIVOT) {
    transformedProps = { ...transformedProps, ...getPivotProps(chartProps) };
  }

  return transformedProps;
};

export default transformProps;
