const path = require('path');
const merge = require('webpack-merge');
const babelConf = require('./webpack/babel');
const devserver = require('./webpack/devserver');

const common = merge([
  {
    entry: './src/entry.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  },
  babelConf()
]);


module.exports = function(env) {
  if(env === 'production') {
    return merge([
      common
    ]);
  } else {
    return merge([
      common,
      devserver()
    ]);
  }
};
