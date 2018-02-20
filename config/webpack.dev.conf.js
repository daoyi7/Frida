const webpack = require('webpack') // 引入webpack
const opn = require('opn') // 打开浏览器
const merge = require('webpack-merge') // webpack配置文件合并
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf.js') // 基础配置
const webpackFile = require('./webpack.file.conf') // 文件路径配置

const config = merge(baseWebpackConfig, {
    output: {
        filename: "bundle.js"
    },
    resolve: {
        alias: {
            component: path.resolve(__dirname, '../src/component'),
            containers: path.resolve(__dirname, '../src/containers'),
            static: path.resolve(__dirname, '../src/static'),
            utils: path.resolve(__dirname, '../src/utils'),
            mock: path.resolve(__dirname, '../mock')
        }
    },
    plugins: [
        /*设置开发环境*/
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        /*设置热更新*/
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                include: [
                    path.resolve(__dirname, '../src'),
                    path.resolve(__dirname, '../entry')
                ],
                exclude: [path.resolve(__dirname, '../node_modules')]
            }, {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }
                ]
            }, {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            camelCase: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    }, {
                        loader: "less-loader",
                        options: {
                            modules: true,
                            camelCase: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    }
                ]
            }, {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    /*设置api转发*/
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        hot: true,
        inline: true,
        contentBase: path.resolve(webpackFile.devDirectory),
        historyApiFallback: true,
        disableHostCheck: true,
        proxy: {
            "/api/*": "http://localhost:3000/api/"
        },
        /*唤起浏览器，并打开本项目地址*/
        // after() {     opn('http://localhost:' + this.port) }
    }
})

module.exports = config
