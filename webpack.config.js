const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    watch: true,
    target:'electron-renderer',
    watchOptions: {
        aggregateTimeout: 300,
        ignored: /node_modules/,
        poll: 1000
    },
    mode: 'development',
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'public')
    },
    devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader:'vue-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                //exclude:path.resolve(__dirname, "node_modules"),
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                        limit: 1000000
                    }
                  }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                        esModule: false,
                        limit: 1048576
                    }
                  }
                ]
            },
            {
                test: /\.js$/,
                exclude:path.resolve(__dirname, "node_modules"),
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    cacheDirectory: true
                  }
                }
            },
            {
                test: /(\.css|\.scss)$/,
                exclude:path.resolve(__dirname, "node_modules"),
                use:[{
                        loader:'vue-style-loader'
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'sass-loader'
                    }]
            },
            {
                test: /\.less$/,
                exclude:path.resolve(__dirname, "node_modules"),
                use:[{
                        loader:'vue-style-loader'
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'less-loader'
                    }]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            minify: { 
              minifyCSS: true// 压缩内联css
            },
            filename: 'index.html',
            template: 'src/extend/template.html'
        })
    ]
}