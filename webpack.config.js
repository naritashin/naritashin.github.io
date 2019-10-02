const autoprefixer = require('autoprefixer')
// const Fiber = require('fibers')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const isPrd = process.NODE_ENV === 'production'

const config = {
  mode: isPrd ? 'production' : 'development',
  entry: path.resolve(__dirname, 'client/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.(css|scss$)/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [autoprefixer()]
            }
          }
          // {
          //   loader: 'sass-loader',
          //   options: {
          //     implementation: require('sass'),
          //     fiber: Fiber
          //   }
          // }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'client/index.html')
    })
  ],
  optimization: {
    splitChunks: {
      name: 'vender',
      chunks: 'all'
    }
  },
  resolve: {
    modules: [path.resolve(__dirname, 'client'), 'node_modules'],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue', '.scss']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: isPrd ? 'none' : 'inline-cheap-source-map'
}

module.exports = config
