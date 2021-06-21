import {Transformer} from '@parcel/plugin';
import * as compiler from 'vue-template-compiler';
import * as componentCompilerUtils from '@vue/component-compiler-utils';

export default new Transformer({
  async parse({asset, config, logger, resolve, options}) {
    let code = await asset.getCode();
    return componentCompilerUtils.parse({
      source: code,
      needMap: true,
      filename: asset.filePath,
      sourceRoot: '', // Used for sourcemaps. Override so it doesn't use cwd
      compiler: compiler,
    });
  },

  async transform({asset, config, logger, resolve, options}) {
    console.log(await asset.getAST());

    return [asset];
  },
});
