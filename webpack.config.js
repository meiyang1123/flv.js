const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'flv.js',
        library: 'flvjs',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
    },
};