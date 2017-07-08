var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var EXAMPLES_DIR = path.resolve(__dirname, 'examples');

function isDirectory(dir) {
  return fs.lstatSync(dir).isDirectory();
}

function buildEntries() {
  return fs.readdirSync(EXAMPLES_DIR).reduce(function (entries, dir) {
    if (dir === 'build')
      return entries;

    var isDraft = dir.charAt(0) === '_';

    if (!isDraft && isDirectory(path.join(EXAMPLES_DIR, dir)))
      entries[dir] = path.join(EXAMPLES_DIR, dir, 'index.js');

    return entries;
  }, {});
}
module.exports = {

  entry: buildEntries(),

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.resolve(__dirname, 'examples/__build__'),
    publicPath: '__build__/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.css$/, exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{ loader: 'style-loader' // creates style nodes from JS strings
        }, { loader: 'css-loader' // translates CSS into CommonJS
        }, { loader: 'sass-loader' // compiles Sass to CSS
        }]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'shared', filename: 'shared.js' })
  ]

};
