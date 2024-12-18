import { t, ChartMetadata, ChartPlugin, Behavior } from '@superset-ui/core';
import buildQuery from './buildQuery';
import controlPanel from './controlPanel';
import thumbnail from '../images/thumbnail.png';
import transformProps from './transformProps';
import { PaulzTableFormData, PaulzTableProps } from '../types';

const metadata = new ChartMetadata({
  behaviors: [
    Behavior.InteractiveChart,
    Behavior.DrillToDetail,
    Behavior.DrillBy,
  ],
  category: t('Table'),
  canBeAnnotationTypes: ['EVENT', 'INTERVAL'],
  description:
      'Используйте таблицы, чтобы продемонстрировать представление базовых данных, показать агрегированные показатели или для суммирования набора данных путем группировки нескольких статистических данных по двум осям.',
  name: t('PaulZ Table'),
  tags: [
    t('Additive'),
    t('Business'),
    t('Pattern'),
    t('Popular'),
    t('Report'),
    t('Sequential'),
    t('Tabular'),
    t('Description'),
  ],
  thumbnail,
  exampleGallery: [{ url: '' }],
});

export default class PaulzTable extends ChartPlugin<
    PaulzTableFormData,
    PaulzTableProps
> {
  constructor() {
    super({
      buildQuery,
      controlPanel,
      loadChart: () => import('../PaulzTable'),
      metadata,
      transformProps,
    });
  }
}