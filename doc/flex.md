# flex及其过渡属性
* -webkit-box,-webkit-inline-box
* -moz-box,-moz-inline-box
* -ms-flexbox,-ms-inline-flexbox
* -webkit-flex,-webkit-inline-flex
* flex,inline-flex

# box
# flex-box
# flex

```
.flex {
  display: -webkit-box;
  /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;
  /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;
  /* TWEENER - IE 10 */
  display: -webkit-flex;
  /* NEW - Chrome */
  display: flex;
  /* NEW, Spec - Opera 12.1, Firefox 20+ */
}

.inline-flex {
  display: -webkit-inline-box;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: -webkit-inline-flex;
  display: inline-flex;
}

.flex-column {
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  flex-direction: column;
}

.flex-center {
  -webkit-box-pack: center;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -moz-align-items: center;
  -webkit-align-items: center;
  align-items: center;
}

.flex-center-h {
  -webkit-box-align: center;
  -moz-align-items: center;
  -webkit-align-items: center;
  align-items: center;
}

.flex-h-baseline {
  -webkit-box-align: baseline;
  -moz-align-items: baseline;
  -webkit-align-items: baseline;
  align-items: baseline;
} 

.flex-h-middle {
  -webkit-box-align: middle;
  -moz-align-items: middle;
  -webkit-align-items: middle;
  align-items: middle;
}

.flex-row-reverse {
  -webkit-box-pack: end;
  -webkit-box-direction: reverse;
  -webkit-box-orient: horizontal;
  -moz-flex-direction: row-reverse;
  -webkit-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.flex-between {
  -webkit-box-pack: justify;
  -moz-justify-content: space-between;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

.flex-around {
  -webkit-box-pack: distribute;
  -moz-justify-content: space-around;
  -webkit-justify-content: space-around;
  justify-content: space-around;
}

.flex-wrap {
  -moz-box-lines: multiple;
  -webkit-box-lines: multiple;
  box-lines: multiple;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

//解决flex-i 在IOS9以下不兼容
.width-0 {
  width: 0;
}

.flex-start {
  -webkit-box-pack: start;
  -moz-justify-content: flex-start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
}

.flex-end {
  -webkit-box-pack: end;
  -moz-justify-content: flex-end;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
}
.flex-1 {
  -webkit-box-flex: 1;
  /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 1;
  /* OLD - Firefox 19- */
  -webkit-flex: 1;
  /* Chrome */
  -ms-flex: 1;
  /* IE 10 */
  flex: 1;
  /* NEW, Spec - Opera 12.1, Firefox 20+ */
}

.flex-2 {
  -webkit-box-flex: 2;
  /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 2;
  /* OLD - Firefox 19- */
  -webkit-flex: 2;
  /* Chrome */
  -ms-flex: 2;
  /* IE 10 */
  flex: 2;
  /* NEW, Spec - Opera 12.1, Firefox 20+ */
}

.flex-3 {
  -webkit-box-flex: 3;
  /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 3;
  /* OLD - Firefox 19- */
  -webkit-flex: 3;
  /* Chrome */
  -ms-flex: 3;
  /* IE 10 */
  flex: 3;
  /* NEW, Spec - Opera 12.1, Firefox 20+ */
}

.flex-4 {
  -webkit-box-flex: 4;
  /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 4;
  /* OLD - Firefox 19- */
  -webkit-flex: 4;
  /* Chrome */
  -ms-flex: 4;
  /* IE 10 */
  flex: 4;
  /* NEW, Spec - Opera 12.1, Firefox 20+ */
}

.flex-5 {
  -webkit-box-flex: 5;
  /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 5;
  /* OLD - Firefox 19- */
  -webkit-flex: 5;
  /* Chrome */
  -ms-flex: 5;
  /* IE 10 */
  flex: 5;
  /* NEW, Spec - Opera 12.1, Firefox 20+ */
}

// 可以覆盖flex中的flex-shrink属性值
.flex-no-shrink {
  -moz-box-flex: 0.0;
  -webkit-box-flex: 0.0;
  box-flex: 0.0;
  -moz-flex-shrink: 0;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
}
```
