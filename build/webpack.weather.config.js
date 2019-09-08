var webpcak = require('webpack');
var path = require('path')

module.exports = {
    entry: path.resolve('./src/weather/index.js'),
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_module/,
                use: ['babel-loader']
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'weather.js'
    },
    target: "node"
}
