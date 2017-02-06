module.exports = {
    entry: __dirname + '/src/checkbox.js',
    output: {
        path: __dirname + '/dist',
        filename: 'checkbox.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
