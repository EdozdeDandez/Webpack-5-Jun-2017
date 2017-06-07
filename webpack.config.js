require('webpack');

module.exports = {
  entry: ["babel-polyfill","./app.js","./style.scss"],
  output: {
    filename: "bundle.js"
  },
resolve: {
  extensions: ['*', '.js', '.es6','.scss']
},
module: {
   loaders: [
     {
       test: /\.scss$/,
       loader: 'style-loader!css-loader!sass-loader',
      },
     {
       test: /\.(es6|js)$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
          plugins: ['transform-runtime'],
          cacheDirectory: true, 
          presets: ['react', 'es2015'] 
       }
      }
   ]
 },
 /*plugins: [
  new UglifyPlugin()
 ],*/
  watch: true
}

