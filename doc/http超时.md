# 关于http超时问题
## 浏览器输入url到显示页面背后的事情
```
    1、输入url并回车
    2、浏览器拿到域名后，请求域名DNS获取对应的IP（有可能出错，域名不存在；未找到对应的IP等）
    3、拿到IP后，建立TCP链接
    4、TCP链接建立后，封装HTTP数据包并通过TCP进行数据交换
```
## 请求超时：就是建立TCP三次握手的时间限制
```
    三次握手：
    C（发送sync包，并进入SYN_SEND状态）------------->S
    C（SYN_SEND状态）<--------------S(接收到C的sync包，发送ACK+SYNC包，ACK确认C的SYNC，SYNC是S的包，并进入SYN_RECE状态)
    C(接收到S的ACK+SYNC，并发送ACK包给S，并进入ESTABLISHED状态)-------------->S（SYN_RECE状态，接到包进入ESTABLISHED状态）

    以上三步，都存在丢包可能，所以就有了timeout机制，超时未收到应该，就重新发包

    http协议请求超时，主要也就是TCP链接建立超时
```
## 响应超时：建立起TCP链接后，到第一次接收到数据之间的时间限制（包括第一次到第二次，第二次到第三次……）
```
    1、经测试，chrome存在响应超时，即后台一直处理业务，超过time时间没有返回，浏览器会将请求置为失败状态，走到catch中，chrome大概是5分钟
    2、一般，响应后台应该统一在后台处理，当处理耗时任务时，需要设置好超时time值，及时反馈给请求
```