const path = require('path');
const webpack = require('webpack');
const PUBLIC_PATH = '/static/js/';

const config = {
    entry: {
        main: './src/App.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: PUBLIC_PATH
    },
    devtool: 'cheap-eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                use: ['source-map-loader'],
                enforce: 'pre'
            }
        ]
    },
    plugins: [
    ],
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        publicPath: PUBLIC_PATH,
        contentBase: path.join(__dirname, 'public'),
        // hot: true,
        historyApiFallback: true,
        compress: true,
    }
};

module.exports = config;