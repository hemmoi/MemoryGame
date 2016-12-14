var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: 'public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Game: 'app/components/Game.jsx',
      Card: 'app/components/Card.jsx',
      applicationStyles: 'app/styles/app.scss',
      cardBackground: 'app/styles/barocco.jpg'
    },
    extensions: ['', '.js', '.jsx', '.jpg', 'png']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /{node_modules|bower_components}/
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url',
        query: { limit: 25000 }
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
