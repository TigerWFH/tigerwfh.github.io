# 关于fetch中的catch
## 规范说 发生网络问题，才会reject
* 代理(浏览器等)断网
* 代理网络正常，服务器未启动（找不到服务器）
* 总结：BS没有实际通信，即B没有得到S的应答
## 只要BS有实际通信，都会走到resolve
* res.ok = true表示200-299，服务器正确处理请求，会返回预期的数据格式，可以使用res.json()
* res.ok = false表示其它http status，表示服务器处理异常，返回未知的数据格式，可能直接res.json()可能抛出异常

## GET和POST
GET和POST等方法基于TCP通信，本质上没有区别。知识http规范做了规范约定，约定了不同方法引起不同的操作

* GET和OPTION：将请求参数写入url；GET产生一个TCP数据包
* POST等方法：将参数写入request body；POST产生两个TCP数据包（复杂请求的预请求options）

## http协议规定，post数据必须放在body中，但没有规定编码方案
* Content-Type：服务端根据请求中的Content-Type字段，获取编码方案
```js
    /*
        1、application/x-www-form-urlencoded：表单默认编码方案
            数据格式：
                encodeURIComponent(key1)=encodeURIComponent(val1)&encodeURIComponent(key2)=encodeURIComponent(key2)
        2、multipart/form-data
            new FormData()
        3、application/json
            JSON.stringify(params)
        4、text/xml
    */ 
```