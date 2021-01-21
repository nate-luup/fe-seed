const { HotModuleReplacementPlugin } = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')

const devConfig = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]--[local]--[hash:base64:5]',
                exportLocalsConvention: 'camelCase',
              },
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    // hot: true,
    // hotOnly: true,
    port: 8888,
    proxy: {
      '/api': {
        target: 'http://localhost:9092',
      },
    },
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/assets/template/index.html',
      filename: 'index.html',
    }),
    new HotModuleReplacementPlugin(),
  ],
}

module.exports = merge(baseConfig, devConfig)
