import { t } from '@superset-ui/core';
import { ControlPanelSectionConfig } from '@superset-ui/chart-controls';
import {
  colOrderPivot,
  colSubtotalPositionPivot,
  currencyFormatPivot,
  rowOrderPivot,
  rowSubtotalPositionPivot,
  valueFormatPivot,
} from '../../../controls';
import { isPivotType } from '../../../utils';

export const pivotOptionsSection: ControlPanelSectionConfig = {
  label: t('Настройки'),
  expanded: true,
  visibility: ({ controls }) => isPivotType({ controls }),
  controlSetRows: [
    [valueFormatPivot],
    [currencyFormatPivot],
    [rowOrderPivot],
    [colOrderPivot],
    [rowSubtotalPositionPivot],
    [colSubtotalPositionPivot],
  ],
};
