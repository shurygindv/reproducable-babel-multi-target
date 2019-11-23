const path = require("path");

const {BabelMultiTargetPlugin} = require('webpack-babel-multi-target-plugin');
 
module.exports = {
    entry: './index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [BabelMultiTargetPlugin.loader()],
        }]
    },
    plugins: [new BabelMultiTargetPlugin()]
}