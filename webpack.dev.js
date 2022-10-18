const common = require('./webpack.config.js');

module.exports = {
    ...common,
    mode: 'development',
    optimization: {
        minimize: false
    },
    devServer: {
        host: '0.0.0.0',
        hot: true,
        hotOnly: true,
        compress: false,
    }
};
