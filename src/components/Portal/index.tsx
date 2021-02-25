/** 
 * 实现Modal方式
 * 1、正常的Modal组件，用样式定位
 *  1-1：当父组件容器overflow： hidden或者存在z-index时候，需要在视觉上突破父组件的容器
 * 2、使用ReactDOM.render(instance, container[, callback]):null | reference
 *    使用ReactDOM.unmountComponentAtNode()
 * 3、使用ReactDOM.unstable_renderSubtreeIntoContainer(parent, component, container, callback)
 * 4、使用ReactDOM.createPortal(instance, container)
 * 
 * 区别：
 *  render函数意味着Modal是一个单独的react tree
 *  createPortal和createElement同级，创建的Portal仍然属于一个react tree
 *  跨react tree自然带来数据传递和事件冒泡的问题
 *  场景1：Modal内容触发事件，父组件是否可以感知问题
 *  场景2：父组件所在的react tree的conotext共享问题
 *  场景3：父组件更重新state，Modal是否可以更新问题
 * 
 * margin：百分比的锚点是容器的宽度，可以通过书写顺序样式writing-mode进行更改，但是内容书写顺序会发生变化，不友好
 *  writing-mode: horizontal-tb | vertical-rl | vertical-lr
 * */
// 声明式Portal
import * as React from "react"
import * as ReactDOM from "react-dom"
import styles from "./index.module.scss"

interface IProps {
    children?: React.ReactNode
    content?: React.ReactNode
    bMaskClose?: boolean
    bMask?: boolean
    onClose?: () => any
    show: boolean
}
class Portal extends React.Component<any, any> {
    static defaultProps = {
        children: null,
        content: null,
        bMaskClose: false,
        bMask: true,
        show: false,
        onClose: null
    }
    container: any
    constructor(props: IProps) {
        super(props)
        this.container = document.createElement("div")
    }

    onClose = () => {
        const {
            bMaskClose,
            onClose
        } = this.props
        if (bMaskClose && typeof onClose === "function") {
            onClose()
        }
    }
    componentDidMount() {
        if (!this.container) {
            this.container = document.createElement("div")
        }
        document.documentElement && document.documentElement.appendChild(this.container)
    }
    componentWillUnmount() {
        if (this.container) {
            document.documentElement && document.documentElement.removeChild(this.container)
            this.container = null
        }
    }
    render() {
        const {
            content,
            children,
            bMask,
            show
        } = this.props
        if (!show) {
            return null
        }
        const elem = <div className={`${bMask ? styles.mask : styles.portal}`}
            onClick={this.onClose}>
            {
                children || content
            }
        </div>
        return ReactDOM.createPortal(elem, this.container)
    }
}

export default Portal