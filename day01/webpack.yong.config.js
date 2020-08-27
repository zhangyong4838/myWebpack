const path = require('path')
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'./yong'),
        filename:'main.js'
    },
    mode:'development'
}