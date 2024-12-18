import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import React from 'react';

export const rowOrderPivot: ControlSetItem = {
  name: 'row_order_pivot',
  config: {
    type: 'SelectControl',
    label: t('Сортировать строки по'),
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
        <div>{t('Изменить порядок строк.')}</div>
        <div>{t('Доступные режимы сортировки:')}</div>
        <ul>
          <li>
            {t(
              'По ключу: используйте имена строк в качестве ключа сортировки.',
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
