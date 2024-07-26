const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.tsx', 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', 
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        },
                    },
                ],
            },
            // You can add more loaders here for other types of files like CSS, SASS, etc.
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
