const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            "flow"
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
}