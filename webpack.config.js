const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      // {
      //   test: /\.(jpg|svg|png|gif|jpeg)$/,
      //   use: 'file-loader'
      // },
      {
        test: /\.(jpg|svg|png|gif|jpeg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240 * 2
          }
        }]
      },
    ]
  }
}
