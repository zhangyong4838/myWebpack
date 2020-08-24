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
                    loader:'url-loader',
                    options:{
                        name:'[name].[ext]',
                        outputPath:'assets/images/',
                        limit:3*1024//对小体积的资源图片进行管理，小图片转成base64,减少请求数量
                    }
                },
            },
            {
                test:/.(woff|exo)$/,
                use:{
                    loader:'file-loader',
                    options:{
                        name:'[name].[ext]',
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