const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const AssetListWebpackPlugin = require('./webpack-plugins/asset-list-webpack-plugin.js')

const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')

const PurifyCSS = require('purifycss-webpack')
const glob = require('glob-all')
const { name: repoName } = require('./package.json')

const prodConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
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
  optimization: {
    usedExports: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/assets/template/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[contenthash:6].css',
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: require('cssnano'),
    }),
    new PurifyCSS({
      paths: glob.sync([
        path.resolve(__dirname, './src/*.html'),
        path.resolve(__dirname, './src/*.js'),
      ]),
    }),
    new AssetListWebpackPlugin({
      filename: `${repoName.replace('-', '_')}`,
    }),
  ],
}

module.exports = merge(baseConfig, prodConfig)
