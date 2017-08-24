const path = require('path');
module.exports = function() {
  return {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, '../dist'),
      compress: true,
      port: 9000,
      hot: true
    }
  };
};
