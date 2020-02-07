const HtmlWebpackPlugin = require('html-webpack-plugin')
const DotenvWebpackPlugin = require('dotenv-webpack')

module.exports = {
  entry: './src/index.tsx',
  target: 'node',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader', 'ts-loader']
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new DotenvWebpackPlugin()
  ]
}
