import log from '@/engine/services/log';
import { buildDir } from '@/engine/config';
import { CreateArts } from '@/engine/core/createArts';
import { clearPreviusBuild } from '@/engine/services/clean';
import { LayoutSettings } from '@/engine/core/LayoutSettings';
import type { LayoutSettingsProps } from '@/engine/interfaces/types';

export default async function createArts(props: LayoutSettingsProps) {
  const layoutSettings = new LayoutSettings(props);

  log('Clearing before build...');
  clearPreviusBuild(buildDir, layoutSettings.gifOptions.export);
  log('** Clear completed **', { type: 'success' });

  const instance = new CreateArts(layoutSettings);

  log('Generating images...');
  return await instance.generate();
}
