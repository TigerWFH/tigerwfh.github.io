# webpack-dev-server(sockjs和sockjs-client)

## Socket.io：服务端对nodejs友好

## sockjs：服务端对sockjs友好
SockJS 是一个浏览器上运行的 JavaScript 库，如果浏览器不支持 WebSocket，该库可以模拟对 WebSocket 的支持，实现浏览器和 Web 服务器之间低延迟、全双工、跨域的通讯通道。优先使用websocket，不支持会降级为轮询(Polling)http
[sockjs](https://github.com/sockjs/)
### sockjs-client：JavaScript client library
```js
    npm install sockjs-client
```
### sockjs-node：Node.js server
```js
// 安装sockjs-node
    npm install sockjs
```

## ws库,websocket服务端标准实现，对应客户端必须是native websocket