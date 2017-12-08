var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');
module.exports = merge(webpackBaseConfig, {
    entry: {
      button: './src/components/button.js',
      loading: './src/components/loading.js',
      video: './src/components/video.js',
      picker: './src/components/picker.js',
      popup: './src/components/popup.js',
      baseList: './src/components/baseList.js',
      swiper: './src/components/swiper.js',
      toast: './src/components/toast.js',
      tab: './src/components/tab.js',
      slider: './src/components/slider.js'
    },
    output: {
      path: path.resolve(__dirname, '../lib'), //输出目标
      filename: '[name]/index.js',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          },
          comments: false,
          sourceMap: false
      })
   ]
});
