import { ControlSetItem, D3_FORMAT_DOCS } from '@superset-ui/chart-controls';
import { ComparisonType, t } from '@superset-ui/core';
import { D3_FORMAT_OPTIONS, DEFAULT_NUMBER_FORMAT } from '../../../../consts';

type SelectDefaultOption = {
  label: string;
  value: string;
};

export const valueFormatPivot: ControlSetItem = {
  name: 'value_format_pivot',
  config: {
    type: 'SelectControl',
    freeForm: true,
    label: t('Формат значения'),
    renderTrigger: true,
    default: DEFAULT_NUMBER_FORMAT,
    choices: D3_FORMAT_OPTIONS,
    description: D3_FORMAT_DOCS,
    tokenSeparators: ['\n', '\t', ';'],
    filterOption: (
      { data: option }: { data: SelectDefaultOption },
      search: string,
    ) => option.label.includes(search) || option.value.includes(search),
    mapStateToProps: state => {
      const isPercentage =
        state.controls?.comparison_type?.value === ComparisonType.Percentage;
      return {
        choices: isPercentage
          ? D3_FORMAT_OPTIONS.filter(option => option[0].includes('%'))
          : D3_FORMAT_OPTIONS,
      };
    },
  },
};
