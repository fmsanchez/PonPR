const webpack = require('webpack');
const config = {
    entry:  __dirname + '/index/index.jsx',
    output: {
        path: __dirname + '/static/bundles',
        filename: 'index.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    }
};

module.exports = config;
