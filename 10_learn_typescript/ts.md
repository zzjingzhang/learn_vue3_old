# ts笔记

## 搭建ts运行环境

### 方式一：webpack

  1.初始化项目: npm init

2. 安装依赖

```js
npm insall webpack webpack-cli -D     //安装完成之后在package.json里面添加脚本 "build": "webpack"
npm install ts-loader typescript -D  //安装完成之后在webpack.config.js里面添加配置
npm install webpack-dev-server -D   //搭建本地服务 安装完成之后在package.json里面添加脚本  "serve": "webpack serve"
npm install html-webpack-plugin -D   //安装完成之后在webpack.config.js里面添加配置

// 还需要运行tsc --init 生成tsconfig.json 文件  否则会报错
```

webpack.config.js的完整配置

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".ts", ".js", ".cjs", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}
```

### 方式二

全局安装ts-node ，使用ts-node typescript(文件名).ts

```js
npm install ts-node -g
npm install tslib @types/node -g  // 这两个包是ts-node的依赖包，需要单独安装
```





## string 和String的区别

```js
string: TypeScript中的字符串类型
String:JavaScript的字符串包装类的类型
```

## ts检测工具

```js
npm install tslint -g
tslint --init // 生成tslint.json 文件
```

