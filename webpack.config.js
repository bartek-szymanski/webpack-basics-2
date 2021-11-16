const path = require('path');

module.exports = {
    mode: 'development', // production
    entry: {
        // the `main` is just a label for the file `app.js` 
        main: path.resolve(__dirname, 'src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js', // main final bundle file. The `[name]` => `main` - is a label given in `entry`   

    }
}