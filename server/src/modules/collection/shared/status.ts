import { Status } from '@/modules/collection/models';

export const status: Status[] = [
  'preview',
  'building',
  'cancelled',
  'finished',
];
export const statusLabels: {
  [key in Status]: Status;
} = {
  preview: 'preview',
  cancelled: 'cancelled',
  building: 'building',
  finished: 'finished',
};
