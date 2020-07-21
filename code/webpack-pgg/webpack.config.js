
const path = require('path')
const webpack  = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// import webpack from 'webpack'
/* 
    @type config = { webpack.Configuration  } from webpack
*/


const config = {
    mode: 'none',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist'),
        publicPath: ''
    },
    // source-map 会暴漏源代码 生产一般不实用
    devtool: 'evel-module-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10 * 1024
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },
    devServer:{
        proxy:{
            '/api': {
                // https://localhost:8080/api/users =>  https://api.github.com/api/users
                target: 'https://api.github.com',
                //真实地址是  https://api.github.com/users 因此下面的配置是 去掉 过滤掉api
                // 匹配正则 把请求地址的 api 替换成''
                pathRewrite: {
                    '^/api': ''
                },
                // 不能使用 localhost:8080 请求github,此配置会把主机名修改为 代理请求的主机名 
                changeOrigin: true
            }

        },
        contentBase: ['./public'],
        open: true,
        // hot: true,
        hotonly: true, 
        port: 9090
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'foo.html'
        }),
        // 热更新
        new webpack.HotModuleReplacementPlugin()
        // 此插件一般放在上线之前执行，开发的时候一般不用
        // new CopyWebpackPlugin({
        //     patterns: [
        //        {
        //         from: 'public/**.*',
        //         to:''
        //        }
        //     ]
        // })
    ]
}

module.exports = config