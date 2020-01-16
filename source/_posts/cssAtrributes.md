---
title: cssAtrributes
date: 2020-01-11 11:13:26
tags: Css
---
**pointer-events: none **
顾名思义，就是鼠标事件拜拜的意思。元素应用了该 CSS 属性，链接啊，点击啊什么的都变成了 “浮云牌酱油”。pointer-events: none 的作用是让元素实体 “虚化”。例如一个应用 pointer-events: none 的按钮元素，则我们在页面上看到的这个按钮，只是一个虚幻的影子而已，您可以理解为海市蜃楼，幽灵的躯体。当我们用手触碰它的时候可以轻易地没有任何感觉地从中穿过去。

**禁止网页文本选中**
body{
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}
---
<!--more-->
**小于1px的左边框**
.detail_list  li .row_con>div{
  height:0.8rem;
  box-sizing:border-box;
  background-position: 0 0;
    background-repeat: repeat-y;
    background-size: 1px 100%;
    background-image: -webkit-gradient(linear,left top,left bottom,color-stop(20%,transparent),color-stop(20%,#dcdcdc),color-stop(80%,#dcdcdc),color-stop(80%,transparent));
    background-image: -webkit-linear-gradient(top,transparent 20%,#dcdcdc 120%,#dcdcdc 80%,transparent 80%);
    background-image: linear-gradient(180deg,transparent 20%,#dcdcdc 20%,#dcdcdc 80%,transparent 80%);
}
---
<!--more-->
CSS3计算calc和vw单位巧妙实现滚动条出现页面不跳动 .wrap-outer指的是居中定宽主体的父级
.wrap-outer {   margin-left: calc(100vw - 100%);   }
.demo{
   width:100vw;
	font-size:10vw;//宽度为窗口100%，字体大小为窗口的10%；
}

##多行文本显示省略号
``` bash
overflow: hidden; /*自动隐藏文字*/
text-overflow: ellipsis;/*文字隐藏后添加省略号*/
white-space: nowrap;/*强制不换行*/

display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
```

