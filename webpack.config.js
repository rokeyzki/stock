var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BannerPlugin = require('webpack/lib/BannerPlugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
  entry: {
    index: './entry/index.entry.js',
    // other: './components/other.entry.js'
  },
  output: {
    path: './static',
    filename: 'js/[name].min.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['antd']
        }
      },{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?{browsers:["last 2 versions", "safari 5", "ie 8", "ie 9", "opera 12.1", "ios 6", "android 4"]}')
      },{
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?{browsers:["last 2 versions", "safari 5", "ie 8", "ie 9", "opera 12.1", "ios 6", "android 4"]}!less-loader')
      },{
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url-loader?hash=sha512&limit=10000&name=img/[hash].[ext]',
          'img?minimize'
        ]
      },{ 
        test: /\.json$/, 
        loader: 'json-loader'
      }
    ],
    postLoaders: [ // 为了兼容IE8
      {
        test: /\.js$/,
        loaders: ['es3ify-loader'], // sudo npm install es3ify-loader
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('css/[name].min.css'),
    new BannerPlugin('This file is created by Charles Lim'),
    new CommonsChunkPlugin('js/common.min.js'),
    // new UglifyJsPlugin({compress:{warnings: false}})
  ],
  imagemin: {
    gifsicle: { interlaced: false },
    jpegtran: {
      progressive: true,
      arithmetic: false
    },
    optipng: { optimizationLevel: 5 },
    pngquant: {
      floyd: 0.5,
      speed: 2
    },
    svgo: {
      plugins: [
        { removeTitle: true },
        { convertPathData: false }
      ]
    }
  }
};