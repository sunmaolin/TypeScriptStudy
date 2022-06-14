# TypeScript Study

## 1.当我们每次修改代码时，都需要使用tsc命令进行编译。

```shell
# 监听编译当前文件
tsc xxx.ts -w
```
如上命令只能单个文件进行编译

我们可以在需要编译的目录下新增tsconfig.json文件。这时在当前目录下直接执行tsc命令就可以编译当前目录所有文件。

```shell
tsc
# 此时也会将目录下文件进入监听模式
tsc -w
```

## 2.正常项目中，我们肯定不会自己去编译代码。都会有打包工具。这里下载webpack

初始化包管理
```shell
npm init -y
```
安装依赖包
```shell
# -D 选项安装到dev环境以来中。因为正式环境不需要打包工具这些
npm install -D webpack webpack-cli typescript ts-loader
```
然后根目录新建webpack.config.js
配置好在package.json中添加build命令进行打包

## 3. webpack插件自动生成html文件

```shell
npm install -D html-webpack-plugin
```
然后在webpack.config.js中配置插件。执行build
会自动生成html，并自动把生成的js文件引入


## 4. webpack服务器插件。项目改变自动刷新编译项目，相当于在服务器中运行项目

```shell
npm install -D webpack-dev-server
```
然后在package.json中配置指令start


## 5. webpack 清除编译dist目录插件。就是在编译生成之前先清空dist文件

```shell
npm install -D clean-webpack-plugin
```
然后在webpack.config.js中配置插件

## 6. 浏览器兼容插件

```shell
npm install -D @babel/core @babel/preset-env babel-loader core-js
```