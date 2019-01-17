const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, '.'),
        port: 4200
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: 'index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }],
            },
        ],
    },
    devtool: 'source-map'
};