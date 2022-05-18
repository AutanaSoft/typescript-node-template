/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const nodeMon = require('nodemon-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'src'),
  target: 'node',
  entry: {
    content: './index.ts',
  },
  output: {
    libraryTarget: 'commonjs',
    filename: './airdashboard_node_app.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    mainFields: ['main', 'module'],
  },
  plugins: [new nodeMon()],
}
