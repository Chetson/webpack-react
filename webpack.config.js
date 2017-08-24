const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const babelConf = require('./webpack/babel');
const devserver = require('./webpack/devserver');
const htmlloader = require('./webpack/html-loader');
const scssloader = require('./webpack/scss-loader');

const common = merge([
  {
    entry: './src/entry.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      // new webpack.optimize.UglifyJsPlugin()
    ]
  },
  babelConf(),
  htmlloader(),
  scssloader()
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
