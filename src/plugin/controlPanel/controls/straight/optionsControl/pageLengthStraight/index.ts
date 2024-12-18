import {
  ControlPanelsContainerProps,
  ControlSetItem,
} from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { PAGE_SIZE_OPTIONS } from '../../../../consts';

export const pageLengthStraight: ControlSetItem = {
  name: 'page_length_straight',
  config: {
    type: 'SelectControl',
    freeForm: true,
    renderTrigger: true,
    label: t('Размер страницы'),
    default: null,
    choices: PAGE_SIZE_OPTIONS,
    description: t(
      'Количество строк на странице, 0 означает отсутствие нумерации страниц.',
    ),
    visibility: ({ controls }: ControlPanelsContainerProps) =>
      !controls?.server_pagination_straight?.value,
  },
};
