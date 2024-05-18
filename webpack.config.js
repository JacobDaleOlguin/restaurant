const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = { //  this tells Webpack where to start bundling your application code. It points to the index.tsx file in the src directory.
  entry: './src/index.tsx',
  mode: 'development',
  // mode: production,
  module: {
    rules: [
      {
        test: /\.tsx?$/, // this rule applies to all TypeScript files (.tsx and .ts)
        use: 'babel-loader', // this tells Webpack to use Babel to transpile your TypeScript and potentially other modern JavaScript features 
                            // (depending on Babel configuration) to a format compatible with older browsers
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, //same as tsx
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: 
            {
              name: '[path][name].[ext]',
            }
          } 
        ]  
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // this tells Webpack which extensions to resolve when encountering file imports without extensions 
                                        // specifying .tsx, .ts, and .js ensures Webpack can find your TypeScript and JavaScript files
},
  output: { // this section defines where the bundled code will be placed
    filename: 'bundle.js', // teh name of the bundled JavaScript file (bundle.js)
    path: __dirname + '/dist' // the output directory for the bundled files (./dist)
  },
  plugins: [ // his section defines plugins that can manipulate the build process or add functionality
    new HtmlWebPackPlugin({
      template: './src/index.html', // this plugin injects your index.html file from the src directory into the final bundle
                                   // it ensures your HTML file references the bundled JavaScript file correctly
    
    })
  ],
  devServer: { // this configures the built-in development server provided by Webpack
    historyApiFallback: true, // page wouldnt refresh unless it was homepage if i dont have this
    static: {
      directory: path.join(__dirname, 'public'), // this sets the directory for serving static files during development (index html and others)
    },
    compress: true, // this enables gzip compression for the development server to improve transfer speeds
    port: 9000, // this sets the devlopment port
  },
};
