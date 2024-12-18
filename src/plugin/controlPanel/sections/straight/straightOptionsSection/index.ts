import { t } from '@superset-ui/core';
import { ControlPanelSectionConfig } from '@superset-ui/chart-controls';
import {
  alignPnStraight,
  allowRearrangeColumnsStraight,
  colorPnStraight,
  columnConfigStraight,
  includeSearchStraight,
  pageLengthStraight,
  showCellBarsStraight,
} from '../../../controls';
import { isStraightType } from '../../../utils';

export const straightOptionsSection: ControlPanelSectionConfig = {
  label: t('Настройки'),
  expanded: true,
  visibility: ({ controls }) => isStraightType({ controls }),
  controlSetRows: [
    [pageLengthStraight],
    [includeSearchStraight, showCellBarsStraight],
    [alignPnStraight, colorPnStraight],
    [allowRearrangeColumnsStraight],
    [columnConfigStraight],
  ],
};
