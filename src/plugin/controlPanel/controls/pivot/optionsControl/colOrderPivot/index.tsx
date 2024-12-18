import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import React from 'react';

export const colOrderPivot: ControlSetItem = {
  name: 'col_order_pivot',
  config: {
    type: 'SelectControl',
    label: t('Сортировать столбцы по'),
    default: 'key_a_to_z',
    choices: [
      ['key_a_to_z', t('По алфавиту А-Я')],
      ['key_z_to_a', t('По алфавиту Я-А')],
      ['value_a_to_z', t('Значение по возрастанию')],
      ['value_z_to_a', t('Значение по убыванию')],
    ],
    renderTrigger: true,
    description: (
      <>
        <div>{t('Изменить порядок столбцов.')}</div>
        <div>{t('Доступные режимы сортировки:')}</div>
        <ul>
          <li>
            {t(
              'По ключу: используйте имена столбцов в качестве ключа сортировки.',
            )}
          </li>
          <li>
            {t(
              'По значению: используйте значения показателей в качестве ключа сортировки.',
            )}
          </li>
        </ul>
      </>
    ),
  },
};
