module.exports = {
    // mode: 'development',
    devtool: false,
    module: {
     rules: [
        {
          test: /\.txt$/i,
          type: 'asset/inline',
        }, {
          test: /\.foo$/i,
          use: [
              'url-loader'
          ],
        }
     ]
    },
    optimization: {
        minimize: false,
        runtimeChunk: true,
    }
  }