const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
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
                test:/.(png|gif|jpe?g)$/,
                use:{
                    loader:'file-loader',
                    options:{
                        name:'[name].[ext]',
                        outputPath:'assets/images/'
                    }
                },
            },
            {
                test:/.css$/,
                use:['style-loader','css-loader'],
            },
        ]
    },
    plugins:[
        new htmlwebpackplugin({
            template:'./src/assets/html/index.html',
            filename:'index.html'
        }),
        new CleanWebpackPlugin()
    ]
}