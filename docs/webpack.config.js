const { resolve } = require('path');

module.exports = {
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.vue',
      '.ts',
      '.css',
      '.scss'
    ],
    root: resolve(__dirname),
    alias: {
      '@': resolve(__dirname),
      '~': resolve(__dirname)
    }
  }
};
