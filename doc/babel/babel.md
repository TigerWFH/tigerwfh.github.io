# babel：是一个用于将ecmascript2015以上的代码转换成向前兼容的js代码的工具链。主要作用如下
* `转换语法`
* `polyfill：通过@babel/polyfill为目标环境提供对应apis`
* `代码转换`
* `其他`
```
    babel-core:
    babel-cli:
    preset-env:
    @babel/polyfill:
    All the Babel modules you'll need are published as separate npm packages scoped under @babel (since version 7)
    @babel/core:
    @babel/cli
    @babel/*
```
## babel：分为三个阶段
* `1、parsing:`
* `2、transforming：`
* `3、printing：`
## polyfill: @babel/polyfill，1、会加载整个polyfill库，2、切污染全局环境
## babel-runtime: 取代不了polyfill
[runtime和polyfill比较](https://www.jianshu.com/p/73ba084795ce)
## babel plugins: small JavaScript programs that instruct Babel on how to carry out transformations to the code
## babel presets: is just a pre-determined set of plugins
## 如何制定目标js的版本？
[插件](https://babeljs.io/docs/en/plugins)
```
    已经过时，最新会使用babel-preset-env和target确定编译目标
    将代码转换成ES3：babel-preset-es3
    将代码转换成ES5：babel-preset-es2015，babel-preset-stage-0，babel-preset-stage-1，babel-preset-stage-2，babel-preset-stage-3
    将代码转换成ES6：babel-preset-es2016
    将代码转换成ES7：babel-preset-es2017
    
```
## babel-preset-env：在 babel-preset-env 的官方说明中提到这是一款可以“自动”决定加载哪些插件和 polyfill 的 preset
[babel-preset-env](https://github.com/babel/babel-preset-env)
## targets配置项：可以通过指定更高的浏览器版本来减少插件和 polyfill 的代码量，并且直接使用原生 ES6 的新特性，特别适合 Electron 及移动端 App 或者那些已指定了浏览器的内网应用程序
## modules配置项：用来指定模块化方式，支持 AMD、UMD、SystemJS、CommonJS 等。当然在 Webpack 2/3 的时代，推荐将 modules 设置为 false，即交由 Webpack 来处理模块化，通过其 TreeShaking 特性将有效减少打包出来的 JS 文件大小：