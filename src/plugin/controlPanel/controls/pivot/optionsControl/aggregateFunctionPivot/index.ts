import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const aggregateFunctionPivot: ControlSetItem = {
  name: 'aggregate_function_pivot',
  config: {
    type: 'SelectControl',
    label: t('Функция агрегирования'),
    clearable: false,
    choices: [
      ['Count', t('Количество')],
      ['Count Unique Values', t('Количество уникальных значений')],
      ['List Unique Values', t('Список уникальных значений')],
      ['Sum', t('Сумма')],
      ['Average', t('Среднее')],
      ['Median', t('Медиана')],
      ['Sample Variance', t('Дисперсия')],
      ['Sample Standard Deviation', t('Стандартное отклонение')],
      ['Minimum', t('Минимум')],
      ['Maximum', t('Максимум')],
      ['First', t('Первый')],
      ['Last', t('Последний')],
      ['Sum as Fraction of Total', t('Сумма как доля целого')],
      ['Sum as Fraction of Rows', t('Сумма как доля строк')],
      ['Sum as Fraction of Columns', t('Сумма как доля столбцов')],
      ['Count as Fraction of Total', t('Количество, как доля от целого')],
      ['Count as Fraction of Rows', t('Количество, как доля от строк')],
      ['Count as Fraction of Columns', t('Количество, как доля от столбцов')],
    ],
    default: 'Sum',
    description: t(
      'Агрегатная функция, применяемая при повороте и вычислении общего количества строк и столбцов.',
    ),
    renderTrigger: true,
  },
};
