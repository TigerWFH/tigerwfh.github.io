import {
    createStore,
    applyMiddleware,
    combineReducers,
    // DeepPartial
} from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import home, { initialHomeState, IHomeState } from '@/pages/home/controller/reducers'
import double, { initialDoubleState, IDouble } from '@/pages/bones/controller/reducers'
import detail, { initialState as detailState, IDetail } from '@/pages/detail/controller/reducers'
import other from '@/pages/other/controller/reducers'
import child, { initialState as childState } from '@/pages/child/controller/reducers'
import hooks, { initialState as hooksState } from "@/pages/hooks/controller/reducers"
import demos from "@/pages/demos/controller/reducers"
import mine, { initialState as mineState, IMineState } from "@/pages/mine/controller/reducers"
// app的初始状态
interface IGlobalState {
    home: IHomeState,
    double: IDouble,
    detail: IDetail,
    about: any,
    blog: any,
    hooks: any
    demos: any,
    mine: IMineState
}

const initialState: any = {
    home: initialHomeState,
    double: initialDoubleState,
    detail: detailState,
    child: childState,
    hooks: hooksState,
    mine: mineState
};
/* combineReducers合并reducer：
1、以state=undefined，action={type: INIT}执行每一个reducer，并检测每一个reducer的返回值是否为undefined
    如果是undefined，抛异常；否者，进行第2步。（结论1：每一个reducer对INIT的action返回值不能是undefined）
2、以state=undefined，action={type: PROBE_UNKNOWN_ACTION}执行每一个reducer，并检测每一个reducer的返回值
    是否为undefined，如果是undefined，抛异常；（结论2：reducer对PROBE_UNKNOWN_ACTION的action返回值不能是undefined）
 */
const rootReducers = combineReducers({
    home,
    double,
    detail,
    other,
    child,
    hooks,
    demos,
    mine
});

let middlewareList: Array<any> = [thunk];
if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
        duration: true,
        logErrors: true,
        collapsed: true
    });
    middlewareList.push(logger);
}
const store = createStore(rootReducers, initialState, applyMiddleware(...middlewareList))
store.subscribe(() => {
    console.log("state===>", store.getState())
})
export default store;



