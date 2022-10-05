import Queue from '@/services/queues';
import { LayoutSettingsProps } from '@/engine/interfaces/types';
import createArts from '@/engine/main';

type QueueInput = LayoutSettingsProps & {
  user: any;
};

const collectionQueue = new Queue(async (input, cb) => {
  await createArts(input as LayoutSettingsProps);
  cb(null, input);
});

export default function queueCollection(layerSetting: QueueInput, cb: () => Promise<any>) {
  console.log(layerSetting.pathBuild);
  collectionQueue.push(layerSetting).on('finish', async (result) => {
    // send email here
    await cb();
    console.log(result);
  });
}
