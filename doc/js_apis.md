# Web Apis
* `元素位置信息`
```js
/**
 * 
 * 1、获取屏幕宽高（screen）：
 *      window.screen.width：屏幕宽度
 *      window.screen.height：屏幕高度
 * 2、获取可视区域宽高（client*）
 *      window.innerWidth
 *      window.innerHeight
 * 
 * 3、文档对象：documentElement返回文档对象的根元素的只读属性，对于任何非空HTML文档，总是会返回一个 <html> 元素
 *  特例：css的width和height样式作用于html元素，有视觉效果，但是client不受影响，且overflow属性无效（部分css属性作用在html无效），比较特殊
 *       常规样式设定：html,body {XXXXXX}，规避掉html，直接操作body
 *  3-1：documentElement.clientWidth === window.innerWidth, documentElement.clientHeight === window.innnerHeight，不受CSS样式影响
 *  3-2：默认左边框和顶边框为1，即documentElement.clientLeft = documentElement.clientTop = 1，可能可视区域有一个宽度为1的边框
 * 
 * 
 *      Element.clientLeft：滚动条宽度和左边框（border）宽度，验证（MAC chrome和safari）
 *      Element.clientTop：滚动条宽度和顶边框（border）宽度，验证（MAC chrome和safari）
 *      Element.clientWidth：元素内部的高度，包括内容和内边距，验证（MAC chrome和safari），包括滚动内容
 *      Element.clientHeight：元素内部的宽度，包括内容和内边距，验证（MAC chrome和safari），包括滚动内容
 * 
 *      Element.scrollLeft：水平滚动距离，未滚动为0
 *      Element.scrollLeftMax：水平可滚动最大距离，目前非标准规范
 *      Element.scrollTop：垂直滚动距离，未滚动为0
 *      Element.scrollTopMax：垂直可滚动最大距离，目前非标准规范
 *      Element.scrollWidth：内容宽度，包括溢出的不在视图中的内容(即滚动内容高度，也可能设定不可滚动)，不受overflow影响
 *      Element.scrollHeight：内容高度，包括溢出的不在视图中的内容(即滚动内容高度，也可能设定不可滚动)，不受overflow影响
 * 
 *      Element.getClientRects()返回值：相对于屏幕的位置
 *          
 *      Element.getBoundingClientRect()返回值：返回相对于视口的位置（数值相对于视口左上角计算）
 *          left：元素左边框距离视口左边的距离
 *          right：元素右边框距离视口左边的距离
 *          top：元素上边框距离视口上边的距离
 *          bottom：元素下边框距离元素上边的距离
 * 
 *          width：元素的宽度
 *          height：元素的高度
 * 
 * 
 *      HTMLElement.offsetParent：返回指向最近的（包含层级上的最近）包含当前元素的定位元素或者最近的table、td、th、body，当元素的display为none或fixed时，返回null。offsetTop和offsetLeft都是相对于offsetParent内边距边界
 *      HTMLElement.offsetTop：距离定位父级元素上边边界的距离
 *      HTMLElement.offsetLeft：距离定位父级元素左边边界的距离
 *      HTMLElement.offsetWidth：元素的布局宽度，包括滚动条(scrollbar)、边框(border)、水平内边距(padding)、CSS宽度，包括滚动内容
 *      HTMLElement.offsetHeight：元素的布局高度，包括滚动条(scrollbar)、边框(border)、水平内边距(padding)、CSS高度，包括滚动内容(定位元素，即position非static的父元素)
 * 
 * 4、TouchEvent和MouseEvent
 *  4-1：Event：表示DOM中出现的事件，包括用户触发的click，或者runtime触发的动画事件，自定义事件
 *      4-1-1：Event.bubbles，表示事件是否会在DOM中冒泡
 *      4-1-2：Event.cancelBubble，在事件回调返回之前，设置该值为true，可以阻止冒泡，Event.stopPropagation()的别名
 *      4-1-3：Event.cancelable，表示事件是否可以取消
 *      4-1-4：Event.currentTarget，对事件当前注册的目标的引用
 *      4-1-5：Event.target，对产生事件的目标的引用
 *      4-1-6：Event.defaultPrevented，表示event.preventDefault()方法是否取消了事件的默认行为
 *      4-1-7：Event.eventPhase，表示事件流到了哪个阶段(捕获、冒泡)
 *      4-1-8：Event.timestamp，时间戳
 *      4-1-9：Event.type，事件类型
 *      4-1-10：Event.isTrusted，事件是由浏览器发起的还是脚本发起的，Event.initEvent
 *              event.preventDefault()：如果事件可取消，用来取消事件
 *              event.stopPropagation()：停止冒泡
 *              event.stopImmediatePropagation()：阻止监听同一事件的其他事件监听器被调用
 *  4-2：UIEvent：继承了Event，表示简单的用户界面事件
 *      4-2-1：UIEvent.detail，
 *      4-2-1：UIEvent.layerX和UIEvent.layerY，事件相对于当前层的坐标
 *      4-2-1：UIEvent.pageX和UIEvent.pageY，事件相对于整个文档的坐标
 *  4-3：MouseEvent：指用户与指针设备（如鼠标）交互时发生的事件。
 *          例如click,dbclick,mouseup,mousedown,mousemove
 *      4-3-1：MouseEvent.altKey，鼠标事件中，标识alt键是否被按下
 *      4-3-2：MouseEvent.ctrlKey，
 *      4-3-3：MouseEvent.metaKey，
 *      4-3-4：MouseEvent.shiftKey，
 * 
 *      4-3-5：MouseEvent.button，鼠标按钮值
 *      4-3-6：MouseEvent.buttons，多个鼠标按钮
 *      4-3-7：MouseEvent.which，
 * 
 *      4-3-8：MouseEvent.clientX和MouseEvent.clientY，相对于可视区域
 *      4-3-9：MouseEvent.movementX和MouseEvent.movementY，
 *      4-3-10：MouseEvent.offsetX和MouseEvent.offsetY，
 *      4-3-11：MouseEvent.pageX和MouseEvent.pageY，相对于文档
 *      4-3-12：MouseEvent.screenX和MouseEvent.screenY，相对于屏幕的鼠标坐标
 * 
 *      4-3-13：MouseEvent.region
 *      4-3-14：MouseEvent.relatedTarget
 * 
 *  4-4：WheelEvent：MouseEvent的派生类，用户滚动鼠标滚轮或类似输入设备时触发的事件
 *      4-4-1：WheelEvent.deltaX、WheelEvent.deltaY、WheelEvent.deltaZ，滚动量
 *      4-4-2：WheelEvent.deltaMode，单位
 * 
 *  4-5：DragEvent：MouseEvent的派生类，
 *          事件drag、dragend、dragEnter、dragexit、dragleave、dragover、dragstart、drop
 *      4-5-1：dataTransfer，在拖放交互期间传输的数据
 
 *  4-6：TouchEvent：是一类描述手指在触摸平面的状态变化的事件。这类事件用于描述一个或多个触点的信息
 *          TouchEvent继承了UIEvent和Event属性，UIEvent
 *      4-2-1：TouchEvent.altKey，
 *      4-2-1：TouchEvent.ctrlKey，
 *      4-2-1：TouchEvent.metaKey，
 *      4-2-1：TouchEvent.shiftKey，
 *      
 *      4-2-4：TouchEvent.touches，TouchList对象，包含了所有当前接触触摸平面的触点的 Touch 对象
 *      4-2-3：TouchEvent.targetTouches，返回TouchList对象，起始触点并且仍然没有离开的Touch对象
 *      4-2-2：TouchEvent.changedTouches，返回TouchList对象，状态发生变化的触点的Touch对象
 *      关于touch对象：
 *          Touch.identifier：touch对象的标识
 *          Touch.target：触摸点最初的接触元素引用
 * 
 *          Touch.screenX：相对于屏幕的坐标
 *          Touch.screenY：
 *          Touch.clientX：相对于可视区域的坐标
 *          Touch.clientY：
 *          Touch.pageX：相对于文档的坐标
 *          Touch.pageY：
 *          Touch.radiusX：包围接触点最小椭圆的水平轴半径
 *          Touch.radiusY：包围接触点最小椭圆的垂直轴半径
 *          Touch.rotationAngle：椭圆顺时针旋转角度
 *          Touch.force：压力大小
 *          
 *  4-7：FocusEvent：
 *  4-8：KeyboardEvent：
 *  4-7：InputEvent：
 *  4-7：FocusEvent：
 *  4-7：CompositionEventEvent：
*/ 
```
* `EventTarget是一个DOM接口，可以接收事件，Element、Document、Window是常见的EventTarget对象`
```
    EventTarget.addEventListener()：在EventTarget上注册特定事件类型的事件处理程序
    EventTarget.removeEventListener()：EventTarget中删除事件侦听器
    EventTarget.dispatchEvent()：将事件分派到此EventTarget
```
* `Event和CustomEvent：Event表示在DOM接口中出现的事件；CustomEvent表示自定义事件`
```js
    // 添加一个适当的事件监听器（obj可以是window）
    obj.addEventListener("cat", function(e) { process(e.detail) })

    // 创建并分发事件
    var event = new CustomEvent("cat", {"detail":{"hazcheeseburger":true}})
    obj.dispatchEvent(event)// window.fireEvent
```
* `Audio：创建并返回一个HTMLAudioElement（HTMLMidiaElement和HTMLELement的子类）对象，处理音频的Html标签`
* `Image：创建并返回一个HTMLImageElement对象，处理图片的Html标签`
* `ImageData：描述canvas元素隐含像素数据的区域`
* `Fetch：`
* `XMLHttpRequest：`
* `Blob、File和FileList：Blob对象表示一个不可变、原始数据的类文件对象；File基于Blob，继承了Blob功能并拓展使其支持用户系统上的文件； FileList 对象通常来自于一个 HTML <input> 元素的 files 属性`
* `FileReader、FileReaderSync：允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据`
* `URL：是URL标准的组件`
```js
    // URL标准定义了域名、主机、IP地址等概念
    let addr = new URL('https://www.taobao.org')
    let host = addr.host
    let path = addr.pathname
    // URLSearchParams接口
    // URL.createObjectURL(obj) obj是Blob或者File
```
* `Data URL：即前缀为data:协议的URL，允许内容创建者向文档嵌入小文件`
```js
    /*
        Data URLs：由四个部分组成：前缀(data:)、指示数据类型的MIME类型、如果非文本可选base64标记、数据本身
        data:[<mediatype>][;base64],<data>
        <mediaType>是MIME类型的字符串："image/jpeg"，如果被省略，则默认为text/plain;charset=US-ASCII
        例如：
            简单的text/plain类型数据：data:,Hello%2C%20World!
                base64版：data:text/plain;base64,SGVsbGsIFdvcmxkiQ%3D%3D
            HTML文档源代码：data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E
                data:text/html,<script>alert('hi');</script>
    */
```
# JIT：Just-in-time编译器综合了解释器和编译器的优点混合而成。即JS解释器引入了编译器
* Java、C++等是`编译型语言`，执行过程是先编译，再执行：`词法分析->语法分析->语义检查->代码优化和字节码生成->执行`
* Javascript是`解释型语言`，执行过程是：`词法分析->语法分析->语法树->执行`
```js
    /*
        1、词法分析：将字符流(character stream)转换为记号流(token stream)
        2、语法分析：生成AST（Abstract Syntax Tree）
        3、预编译：当Javascript引擎解析脚本时，它会在预编译时期对所有声明的变量和函数进行处理，并且先预声明变量、再预定义函数
        4、解释执行：引擎严格按照作用域scope机制执行，并且Javascript的变量和函数作用域是在定义时决定，而非执行时决定的。
    */ 
```
* `引擎`
```js
    /*
        V8 Google C++
        SpiderMonkey Mozilla C
        Rhino Mozilla Java
    */ 
```
* `JIT原理`
[资料](https://segmentfault.com/a/1190000008632441)
[资料2](https://segmentfault.com/a/1190000011858383)
```js
    /*
        传统的JS引擎，生成AST之后，就开始一边解释一边执行，但有弊端，当某段代码重复执行，就有了优化的空间，而不是重复之前的解释执行。于是就有了JIT（Just-In-Time），是解释器和编译器的混合

        原理：
        分析器：在JS引擎中引入了分析器，用于监控代码的运行情况，记录代码运行次数、如何运行等等信息。会标记代码为warm、hot等
        基线编译器：如果一段代码标记为warm，那么JIT就把它送到极限编译器去编译，并且把编译结果存储起来，之后把编译后的版本替换成对应重复执行的代码执行
        优化编译器：如果一段代码标记为hot，JIT就把它发送到优化编译器，生成一个更快速和高效代码做替换
        去优化：JS是弱类型，如果JIT认为做了一个错误的假设，并且把优化代码丢掉，执行过程将会回到解释器或者基线编译器，这一过程叫做去优化
    */ 
```
# GC
# js性能问题资料
[JS性能阅读资料](https://www.cnblogs.com/hyddd/archive/2013/02/07/2908960.html)
```js
    /*
        DOM 核心问题：DOM修改导致的页面reflow（排版）、repaint（重绘），一般浏览器中repaint要比reflow速度快，所以避免reflow更重要
        系统为了确保执行结果的准确性，所有的DOM修改操作都是同步执行的。
        大部分浏览器都不会在Javascript执行的过程中更新DOM，而是将对DOM的操作放进一个队列，并在JavaScript脚本执行完毕后按顺序一次性执行队列中的DOM修改操作。这也就意味着，用户交互会被一直阻塞，直到reflow（非repaint）完成。

        

        针对DOM问题，Nicholas在《Speed up your Javascript，Part4》中做了详细介绍
    */ 
    // 1、在DOM外执行尽量多的变更操作
    // 不好的做法
    for (var i = 0; i < items.length; i++) {
        var item = document.createElement('div')
        item.appendChild(document.createTextNode("Option" + i)) // 非DOM操作，item还未插入实际生成的DOM中
        list.appendChild(item) // DOM操作
    }
    // 好的做法：使用容器Fragment存放临时变更，最后一次性更新DOM
    var fragment = document.createDocumentFragment()
    for (var i = 0; i < items.length; i++) {
        var item = document.createElement('div')
        item.appendChild(document.createTextNode('Options', i))
        fragment.appendChild(item)
    }
    // 实际的DOM操作迁出了JavaScript
    list.appendChild(fragment)
    /*************************************************************************************************************************************/ 
    // 2、操作DOM前，先把DOM节点隐藏，因为隐藏的节点不会触发重排
    list.style.display = 'none'
    for (var i=0; i < items.length; i++){  
        var item = document.createElement("li");  
        item.appendChild(document.createTextNode("Option " + i);  
        list.appendChild(item);  
    }  
    list.style.display = ""; 
    /*************************************************************************************************************************************/ 
    // 3、一次性修改样式
    // 不好的做法
    // 这种做法会触发多次重排
    element.style.backgroundColor = "blue";  
    element.style.color = "red";  
    element.style.fontSize = "12em";
    // 更好的做法是，把样式都放在一个class下
    .newStyle {  
        background-color: blue;  
        color: red;  
        font-size: 12em;  
    }  
    element.className = "newStyle";
    /*************************************************************************************************************************************/
    // 4、使用缓存，缓存临时节点
    // 不好的做法
    document.getElementById("myDiv").style.left = document.getElementById("myDiv").offsetLeft +  
    document.getElementById("myDiv").offsetWidth + "px";
    // 更好的做法
    var myDiv = document.getElementById("myDiv");  
    myDiv.style.left = myDiv.offsetLeft + myDiv.offsetWidth + "px";  
```
# 枚举
Object指接收string和Symbol做key；其它数据类型会被隐式转化成string
Map可以接受任何类型做key
WeakMap只接受object做key
一般JS中的Object是可以扩展的（增加属性）
## Object.getOwnPropertyNames(obj): string[]
```
    查找指定对象obj 自身 所有属性，包括可枚举和不可枚举的属性，
    不包括原型链上，
    不包括Symbol，
    返回string[]
```
## Object.getOwnPropertySymbols(obj): Symbol[]
```
    返回给定对象 自身 的所有Symbol属性
```
## Object.getOwnPropertyDescriptor(obj, propertyName): object={configurable, enumerable, writable, value, set, get}
```
    返回对应对象 自身 属性描述符
```
## Object.getOwnPropertyDescriptor(obj): object
```
    返回对象所有 自身 对象属性的描述符
```
## Object.getPrototypeOf(object): object | null
```
    返回指定对象的原型（内部[[Prototype]]）
```
## Object.entries(obj): [[key: string, value: any]]
```
    返回指定对象obj 可枚举 属性的键值对的数组
    顺序和for in保持一致
```
## Object.keys(obj):string[]   不走原型链
```
    查找指定对象 自身 可枚举属性，且顺序与手动遍历对象属性时保持一致
    不包括不可枚举属性，
    不包括原型链上属性，
    不包括Symbol
    
    模拟实现方案：
        1、Object.prototype.hasOwnProperty(propertyName)
        2、Object.propertyIsEnumerable(propertyName)
```
## Object.values(obj): any[] 不走原型链
```
    返回指定对象obj 可枚举 属性对应的值数组
    顺序和for in保持一致
```
## for in   走原型链
```
    以任意顺序遍历对象的非Symbol、可枚举属性，
    包括原型链上的属性
    不包括Symbol属性
    不包括不可枚举属性
    不应该用于数组，不保证顺序，一般使用foreach或者for of

    是为了遍历对象属性而构建的，不建议与数组一起使用。最常用于调试，更方便的检查对象属性，输出到控制台
```
## for of es6增加，可以遍历所有可迭代对象[Symbol.iterator]
```
    支持遍历数组、类对象（DOM NodeList对象）、字符串、Map对象、Set对象
    输出内容时数组元素的值
    不支持遍历普通对象，可结合Object.keys使用
    可以搭配Object.entries()使用，输出内容和所以
```

## Object.prototype.propertyIsEnumerable(propertyName): boolean
```
    判断当前对象的某个属性是否可枚举，返回bool值
```

## Object.is
## Object.preventExtensions(obj): obj
```
    将obj变成不可扩展的对象,
    但是configurable=false的属性仍然可以被删除
    原型仍然可以添加属性
    一旦将对象变为不可扩展的对象，就再也不能使其可扩展
    1、不能增加属性
```
## Object.isExtensible(obj): boolean
```
    判断一个对象是否可扩展（增加新属性）
    默认对象是可扩展的，即增加新属性，甚至修改__proto__属性
    Object.preventExtensions,Object.seal,Object.freeze都可以标记一个对象为不可扩展(non-extensible)
```
## Object.isSealed()
## Object.seal(obj): obj+
```
    方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置(不可delete)
    返回被密封的对象(就是原对象)
    1、不能增加属性
    2、已有属性的configurable属性设置为false，已有属性变得不可配置，即不能delete
    3、数据属性不能被重新定义成访问器属性（访问器属性不能定义成数据属性）
    4、__proto__不可修改，单原型链上的属性不受影响
```
## Object.isFrozen()
## Object.freeze(obj)
```
    冻结一个对象，一个被冻结的对象再也不能被修改；
    1、不能增加属性
    2、不能删除已有属性
    3、不能修改已有属性的描述符
    4、不能修改访问器属性
    5、不能修改对象的原型
    如果属性值是对象，则这个对象中的属性是可以修改的，除非它自身也是冻结的。
    也就是说，冻结性不传递
    数组作为一种对象，冻结的效果是元素不能被修改，不可以增加删除元素
    深冻结
```