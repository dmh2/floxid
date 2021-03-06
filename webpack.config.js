/**
 * Created by dave.held on 7/14/16.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    module: {
        loaders: [
            {
                loader: "babel-loader",
                // Skip any files outside of your project's `src` directory
                include: [
                    path.resolve(__dirname, "src"),
                ],
                // Only run `.js` and `.jsx` files through Babel
                test: /\.jsx?$/,
                // Options to configure babel with
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react'],
                }
            }
        ]
    },
    output: {
        filename: 'bundle.js'
    },
    entry: [
        './src/index.js'
    ]
};