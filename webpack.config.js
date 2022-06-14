// 引入一个包
const path = require('path');
// 引入webpack插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// webpack中所有的配置信息
module.exports = {

    // 指定入口文件
    entry: "./src/index.ts",
    
    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname,'dist'),
        // 打包后的文件
        filename: 'index.js',
        // 不使用箭头函数
        environment:{
            arrowFunction: false
        }
    },

    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader:'babel-loader',
                        // 设置babel
                        options:{
                            // 设置预定义的环境
                            presets:[
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            // 浏览器兼容到88版本
                                            "chrome":"88"
                                        },
                                        // 指定corejs的版本
                                        "corejs":"3",
                                        // 使用corejs的方式 “usage”表示按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node_modules/
            }
        ]
    },

    // 配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: '自定义title',
            // 也可以使用自己的模板，如下配置模板
            template:'./src/index.html'
        })
    ],

    // 用来设置引用模块.如果不配置，是没有办法把ts文件当作模块引入的
    resolve:{
        extensions: ['.ts','.js']
    }
};