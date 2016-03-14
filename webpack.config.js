var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',

  entry:  [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    __dirname + "/app/app.js"
  ],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  module: {
    loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel']
        }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    progress: true,
    inline: true
  }
}