import {
  ControlPanelsContainerProps,
  ControlSetItem,
} from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

import { PAGE_SIZE_OPTIONS } from '../../../../consts';

export const serverPageLengthStraight: ControlSetItem = {
  name: 'server_page_length_straight',
  config: {
    type: 'SelectControl',
    freeForm: true,
    label: t('Серверный размер страницы'),
    default: 10,
    choices: PAGE_SIZE_OPTIONS,
    description: t(
      'Количество строк на странице, 0 означает отсутствие нумерации страниц.',
    ),
    visibility: ({ controls }: ControlPanelsContainerProps) =>
      Boolean(controls?.server_pagination_straight?.value),
  },
};
