/*
    使用ReactTree模拟Portal，这是一个独立的ReactTree
*/
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from './index.module.scss';

let container: any = null;
interface IProps {
    content: React.ReactNode
    bMask?: boolean
    onClose?: () => void
}
class ReactTree extends React.Component<IProps, never> {
    static mount(props: IProps) {
        if (!container) {
            container = document.createElement('div');
            document.body.appendChild(container);
        }

        ReactDOM.render(<ReactTree {...props} />, container);/** 最新版：返回void，无法获取实例*/
    }

    static unmount() {
        if (container) {
            ReactDOM.unmountComponentAtNode(container);
        }
    }

    onClose = () => {
        const {
            bMask,
            onClose
        } = this.props
        if (bMask && typeof onClose === "function") {
            onClose()
        }
    }

    render() {
        const {
            content,
            bMask
        } = this.props

        return (
            <div className={`flex flex-column ${bMask ? styles.mask : styles.base}`}>
                {
                    content
                }
            </div>
        )
    }
}

export default ReactTree;