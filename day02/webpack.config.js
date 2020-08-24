const path = require('path')
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'[name].js'
    },
    mode:'development',
    module:{
        rules:[
            {
                test:/.png$/,
                use:'file-loader',
            }
        ]
    }
}