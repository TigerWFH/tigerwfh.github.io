/**
 * 关于fetch
 * 结论：
 *      1、只要BS通信就能走到then
 *          1-1：只要response.ok为true，则状态码在200-299范围，表示业务处理成功
 *          1-2：只要response.ok为false，则状态码不在200-299范围，表示业务处理失败
 *          备注：状态码一般是BS处理，实际业务会在状态码 = 200下，封装自己的异常码
 *      2、BS不能通信（包括代理断网在内），才会走到catch（规范说发生网络问题，根据实际测试，表现为BS无法通信,浏览器请求发不出去）
 * 1、fetch返回一个promise对象，resolve一个Response对象
 * Response属性：
 *  status：http处理状态码，1XXX，2XXX，3XXX，4XXX，5XXX
 *  type：cors，basic
 *  url：请求的url
 *  body:
 *  bodyUsed: 标示该Response是否读取过Body
 *  ok=true，表示成功，即http状态码在200-299之间
 * 2、fetch只在BS无法通信状态下才会reject，和http状态码无关
 * 
 * 3、浏览器根据Content-Type不同，会采用不同的数据编码方式
 * form中的EncType属性指定了 浏览器对传输数据使用的编码类型，似乎是针对post方式的
 * 默认：application/x-www-form-urlencoded：formdata格式（浏览器展示也是FormData）
 *          数据被编码为名称=value对，并用encodeURIComponent进行编码，用&链接
 *          可以使用表单form，也可以拼接
 * multipart/form-data：request payload
 *          数据被编码为一条消息，type=file，包含格式字符
 * text/plain：request payload（HTML5增加）
 *          数据已纯文本方式进行编码，其中不含任何空间或格式字符
 * 至于编码后的数据，get拼接到url上（数据暴露）；post放到body中
 * applicetion/json
 * text/html
 * text/css
 * 
 */
import Loading from 'Components/Loading';

/*
    对参数进行签名和加密：防止跨站请求伪造攻击
*/ 

function getChannel() {
    return "IOS|PAJK"
}
interface IAnyObj {
    [name:string]: any
}
// function encrypt(data: IAnyObj, bLogin: boolean) {
//     const baseObj: IAnyObj = {
//         "_chl": getChannel(),   // 约定的渠道
//         "_sm": "md5",           // 约定的签名方式
//         ...data
//     }
//     let plain = "" // 明文键值对，计算hash
//     let params = "" // 传参
//     Object.keys(baseObj).sort().forEach((key: string) => {
//         const value = baseObj[key]
//         if (value !== null && value !== undefined) {
//             const val = typeof value === "object" ? JSON.stringify(value) : value
//             plain += key + "=" + val
//             params += encodeURIComponent(key) + "=" + encodeURIComponent(val) + "&"
//         }
//     })

//     if (bLogin) {
//         plain += "cookie"
//     }
//     else {
//         plain += "私有字符创"
//     }

//     params += "_sig=" + Md5(plain)
// }

export function gateway(data: IAnyObj, bLogin = false, options: IAnyObj = {}) {
    const config: IAnyObj = {
        bLoading: true,
        bToast: false,
        method: "post",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        mode: 'cors',
        ...options
    }
    if (bLogin) {
        config.credentials = "include"
    }
    // const params = encrypt(data, bLogin)
    // config.body = params
    const {
        bLoading,
        bToast,
        ...rest
    } = config
    if (bLoading) {
        Loading.mount()
    }

    return fetch(config.apiHost, rest)
        .then((res) => {// BS有通信，一定走到这里
            bLoading && Loading.unmount();
            if (res.ok) {
                return res.json();
            }
    }).then((data) => {
        const {code} = data;
        if (code === 0) {
            return data;
        }
        else {
            // 其它code异常提示可以放在这里alert
            return Promise.reject(data);
        }
    }).catch((err) => {// 没有BS通信，fetch异常直接走到这里
        console.log("catch===>", err);
        bLoading && Loading.unmount();
        return Promise.reject(err);
    });
}

/** 
 * 关于axios
 * 
*/
export default function gateway1() {

}