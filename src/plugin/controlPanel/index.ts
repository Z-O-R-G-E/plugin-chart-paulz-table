import {
  ControlPanelConfig,
  getStandardizedControls,
} from '@superset-ui/chart-controls';
import { straightQuerySection, tableTypeSection } from './sections';

const config: ControlPanelConfig = {
  controlPanelSections: [tableTypeSection, straightQuerySection],
  formDataOverrides: formData => ({
    ...formData,
    metrics: getStandardizedControls().popAllMetrics(),
    dimension: getStandardizedControls().popAllColumns(),
  }),
};

export default config;
