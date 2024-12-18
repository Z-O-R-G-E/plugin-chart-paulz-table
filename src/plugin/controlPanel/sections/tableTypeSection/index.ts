import { t } from '@superset-ui/core';
import { ControlPanelSectionConfig } from '@superset-ui/chart-controls';
import { tableType } from '../../controls';

export const tableTypeSection: ControlPanelSectionConfig = {
  label: t('Таблица'),
  expanded: true,
  controlSetRows: [[tableType]],
};
