var webpack = require('webpack');
var path = require('path');
var resolveNgRoute = require('@angularclass/resolve-angular-routes');
var autoprefixer = require('autoprefixer');

const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CompressionPlugin = require('compression-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin=require('html-webpack-plugin');


var commonConfig = {
  resolve: {
    extensions: ['', '.ts', '.js', '.json']
  },
  module: {
    loaders: [
      // TypeScript
      { test: /\.ts$/, loaders: ['ts-loader', 'angular2-template-loader'] },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loaders: ['style','css'] },
      {
        test: /\.html/,
        loader: 'html',
        query: {
          minimize: true,
          removeAttributeQuotes: false,
          caseSensitive: true,
          // Teach html-minifier about Angular 2 syntax
          customAttrSurround: [
            [/#/, /(?:)/],
            [/\*/, /(?:)/],
            [/\[?\(?/, /(?:)/]
          ],
          customAttrAssign: [/\)?\]?=/]
        }
      },
      { test: /\.scss$/, loaders: ['to-string', 'css', 'postcss', 'resolve-url'/*, 'sass?sourceMap'*/] }
    ],
  },

  postcss: function () {
    return [autoprefixer];
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
      root('./src'),
      resolveNgRoute(root('./src'))
    ),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ]

};


var clientConfig = {
  target: 'web',
  entry: {
    main:['./src/client'],
    vendor:[//'jquery','tipso','jquery-ui','ua-parser-js',
      //'rxjs','zone.js',//'reflect-metadata',
      'angular2-universal-polyfills','angular2-universal',
      '@angular/core','@angular/compiler','@angular/common','@angular/forms','@angular/http',
      '@angular/platform-browser','@angular/router'
    ]
  },
  output: {
    path: root('dist/client'),
    filename: "[name].js"
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin("vendor"),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new WebpackMd5Hash(),
    //new DedupePlugin(),
    // new UglifyJsPlugin({
    //   beautify: false,
    //   mangle: {
    //     screw_ie8 : true,
    //     keep_fnames: true
    //   },
    //   compress: {
    //     screw_ie8: true
    //   },
    //   comments: false
    // }),
    new CompressionPlugin({
      regExp: /\.css$|\.html$|\.js$|\.map$/,
      threshold:  1024
    }),
  ],
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  }
};


var serverConfig = {
  target: 'node',
  entry: './src/server', // use the entry file of the node server if everything is ts rather than es5
  output: {
    path: root('dist/server'),
    libraryTarget: 'commonjs2'
  },
  module: {
    preLoaders: [
      //{ test: /angular2-material/, loader: "imports-loader?window=>global" }
    ],
  },
  externals: includeClientPackages([
    // // include these client packages so we can transform their source with webpack loaders
    // '@angular2-material/button',
    // '@angular2-material/button',
    // '@angular2-material/card',
    // '@angular2-material/checkbox',
    // '@angular2-material/core',
    // '@angular2-material/grid',
    // '@angular2-material/icon',
    // '@angular2-material/input',
    // '@angular2-material/list',
    // '@angular2-material/menu',
    // '@angular2-material/progress',
    // '@angular2-material/progress',
    // '@angular2-material/radio',
    // '@angular2-material/sidenav',
    // '@angular2-material/slider',
    // '@angular2-material/slide',
    // '@angular2-material/tabs',
    // '@angular2-material/toolbar',
    // '@angular2-material/tooltip'
  ]),
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  }
};



// Default config
var defaultConfig = {
  context: __dirname,
  resolve: {
    root: root('/src')
  },
  output: {
    publicPath: path.resolve(__dirname),
    filename: 'index.js'
  }
};



var webpackMerge = require('webpack-merge');
module.exports = [
  // Client
  webpackMerge({}, defaultConfig, commonConfig, clientConfig),

  // Server
  webpackMerge({}, defaultConfig, commonConfig, serverConfig)
];

function includeClientPackages(packages) {
  return function(context, request, cb) {
    if (packages && packages.indexOf(request) !== -1) {
      return cb();
    }
    return checkNodeImport(context, request, cb);
  };
}
// Helpers
function checkNodeImport(context, request, cb) {
  if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
    cb(null, 'commonjs ' + request); return;
  }
  cb();
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
