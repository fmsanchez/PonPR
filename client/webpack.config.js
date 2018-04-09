const webpack = require('webpack');
const config = {
    entry:  {
      search: __dirname + '/apps/search/search.jsx',
      trip: __dirname + '/apps/trip/trip.jsx',
      publish: __dirname + '/apps/publish/publish.jsx',
    },
    output: {
        path: __dirname + '/static/bundles',
        filename: '[name].js',
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
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        }
      ]
    }
};

module.exports = config;
