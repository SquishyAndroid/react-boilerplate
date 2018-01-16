module.exports = {
    context: __dirname + "/js",
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/web/js/dist",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    node: {
        __dirname: true
    }
};
