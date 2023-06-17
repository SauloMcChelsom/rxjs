const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
   entry: {  
      app: ['./build/index.js']  
   },  
   output: {  
      path: path.resolve(__dirname, 'dist'),  
      filename: 'main_bundle.js'  
   },  
   devServer: {
        static: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 8080,
   },
   mode:'development',  
   module: {
      rules: [
        // { test: /\.(js|jsx)$/, use: 'babel-loader', },
         { test: /\.(jpe?g|png|gif|svg)$/i, use: [ 'img-loader' ] },
         { test: /\.txt$/, use: 'raw-loader' },
         { test: /\.css$/, use: 'css-loader' },
         { test: /\.ts$/, use: 'ts-loader' },
         { test: /\.css$/,
            use: [
               { loader: 'style-loader' },
               {
                  loader: 'css-loader',
                  options: {
                  modules: true,
                  },
               },
               { loader: 'sass-loader' },
            ],
         },
      ],
   },
   plugins: [new HtmlWebpackPlugin(),/*new HtmlWebpackPlugin({ template: './src/index2.html' }),*/],
}

module.exports = config