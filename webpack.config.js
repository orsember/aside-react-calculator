const HtmlWebpackPlugin = require('html-webpack-plugin');
// this plugin generates the html with the bundled javascript
// it takes a config object to set different aspects like metadata and the like
const path = require('path');

module.exports = {
  entry: 'index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: './img/favicon-eye.ico'
    })
  ],
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.jsx', '.js']
    // needed to add this to be able to resolve imports with no extentions specified
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // see files with extentions and pass them to the specified loader
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader'
        // the loader is just a shortcut for use: [first]
        // the babel loader will compile the js and the jsx to vanilla, for which the
        // .babelrc holds the necessary plugins
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader', //
          'sass-loader' // compiles sass to css, using node sass by default
        ]
        // style-loader must come first in the array, and the css must be imported into the entrypoint
      },
      {
        test: /.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      }
    ]
  }
};
