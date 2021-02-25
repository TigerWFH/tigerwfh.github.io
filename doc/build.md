# 关于BUILD脚本逻辑
## 配置环境
* BABEL_ENV = production
* NODE_ENV = production
## 注册进程异常监听函数
## 加载执行env.js文件
* 执行获取fs
* 执行获取path
* 执行获取paths：
    1、获取appDirection（绝对地址）：当前进程运行目录，即node命令执行目录，process.cwd();
    2、获取静态资源目录envPublicUrl=process.env.PUBLIC_URL
    最终，导出一批路径
* 获取NODE_ENV的值
* 获取REACT_APP_XXX的环境变量，并通过DefinePlugin进行定义
## chalk：终端改变输出字体颜色的工具包
## checkRequiredFiles：检测加载的文件是否存在
## formatWebpackMessages：格式化webpack输出信息
## printHostingInstructions：打印部署目标提示信息
## FileSizeReporter：构建前后文件大小
## printBuildError：