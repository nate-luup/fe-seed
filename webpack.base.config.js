const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: {
    index: './src/pages/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]-[hash:6].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images',
            limit: 1024 * 3, //3kb
          },
        },
      },
      {
        test: /\.(otf|ttf|eot|woff|woff2)$/,
        use: 'file-loader',
      },
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [new CleanWebpackPlugin()],
}
