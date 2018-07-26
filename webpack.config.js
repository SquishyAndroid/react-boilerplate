const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const dev = process.env.NODE_ENV !== 'production';

const UglifyJsPluginConfig = new UglifyJsPlugin({
    test: /\.js($|\?)/i,
    sourceMap: true,
    uglifyOptions: {
        compress: true
    }
});

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: path.join(__dirname, '/src/index.html'),
    filename: 'index.html',
    inject: 'body',
});

const DefinePluginConfig = new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
});

module.exports = {
    devServer: {
        host: 'localhost',
        port: '3000'
    },
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, '/public'),
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
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                }
            }
        ]
    },
    mode: dev ? 'development' : 'production',
    plugins: dev ? [HTMLWebpackPluginConfig] : [ HTMLWebpackPluginConfig, UglifyJsPluginConfig, DefinePluginConfig ],
    node: {
        __dirname: true
    }
};
