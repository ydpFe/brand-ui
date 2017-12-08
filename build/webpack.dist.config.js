/**
 * 本地预览
 */

var path = require('path');
var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
module.exports = merge(webpackBaseConfig, {
    // 入口
    entry: {
      main: './examples/main'
    },
    // 输出
    output: {
      path: path.join(__dirname, '../dist'),
      filename: '[name].js'
    //   chunkFilename: '[name].chunk.js'
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '../dist/index.html'),
            template: path.join(__dirname, '../examples/index.html')
        }),
        new FriendlyErrorsPlugin()
    ]
});
