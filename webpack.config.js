module.exports = {
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  }
}
