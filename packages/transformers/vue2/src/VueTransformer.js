import {Transformer} from '@parcel/plugin';

export default new Transformer({
  async canReuseAST({ast, options, logger}) {
    return false;
  },

  async loadConfig({config, options, logger}) {
    // ...
    return config;
  },

  async parse({asset, config, logger, resolve, options}) {
    console.log('This is loaded');
    // ...
    return {};
  },

  async transform({asset, config, logger, resolve, options}) {
    // ...
    return [asset];
  },

  async generate({asset, ast, resolve, options}) {
    // ...
    return {code, map};
  },
});
