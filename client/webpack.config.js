const webpack = require('webpack');
const config = {
    entry:  __dirname + '/apps/search/search.jsx',
    output: {
        path: __dirname + '/static/bundles',
        filename: 'search.js',
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
