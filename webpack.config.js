module.exports = {
    context: __dirname,
    entry: './components/App.js',
    watch: true,
    hot: true,
    output: {
        filename: 'final.js'
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'babel-loader', options: { presets: ['es2015'] } },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', options: { presets: ['es2015'] },
        query: {
          presets: ['es2015', 'react']
        } },
            { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader', options: { presets: ['es2015'] },
        query: {
          presets: ['es2015', 'react']
        } },
            { test: /\.html$/, exclude: /node_modules/, loader: 'babel-loader', options: { presets: ['es2015'] },
        query: {
          presets: ['es2015', 'react']
        } },
            { test: /\.css$/, exclude: /static/, loader: 'style!css'}
        ]
  }
}