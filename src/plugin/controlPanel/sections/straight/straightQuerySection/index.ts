import { ControlPanelSectionConfig } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import {
  rawColumnsStraight,
  queryModeStraight,
} from '../../../controls';
import { isStraightType } from '../../../utils';

export const straightQuerySection: ControlPanelSectionConfig = {
  label: t('Запрос'),
  expanded: true,
  visibility: ({ controls }) => isStraightType({ controls }),
  controlSetRows: [
    [queryModeStraight],
    [rawColumnsStraight],
  ],
};
