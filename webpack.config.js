var path = require('path')
const webpack = require('webpack')
const NotifierPlugin = require('webpack-notifier')
const resolve = require('path').resolve
const CleanPlugin = require('clean-webpack-plugin')

const externalDeps = [ 'nconf', 'sqlite3' ]

module.exports = {
  devtool: 'source-map',
  entry: {
    "index.js": './index.js',
    "main.js": './main.js',
    "entry.js": './entry.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]',
    libratyTarget: 'var',
    sourceMapFilename: '[name].map'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    },
    {
      test: /\.css$/,
      loader: 'style!css'
    },
    {
      test: /\.(png|jpg|gif|bmp|ico|otf|eot|ttf|woff)$/,
      loader: 'url'
    },
    {
      test: /\.json$/,
      loader: 'json'
    }]
  },
  target: 'electron',
  node: {
    __filename: true,
    __dirname: true,
    setImmediate: true
  },
  resolve: {
    extensions: [ '', '.json', '.js', '.jsx' ],
  },
  _externalDeps: externalDeps,
  plugins: [
    new NotifierPlugin({ alwaysNotify: true }),
    new webpack.ExternalsPlugin('commonjs', externalDeps),
    new webpack.DefinePlugin({
      // 'console': 'global._console || console',
      // 'window.console': 'global._console || console',
      // 'global.console': 'global._console || console',
      'window.localStorage': 'global._mainWin.localStorage',
      'localStorage': 'global._mainWin.localStorage',
    }),
    new CleanPlugin([ resolve(__dirname, 'dist')]),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      "window.jQuery": 'jquery'
    })
  ],
}


